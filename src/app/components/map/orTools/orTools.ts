import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { Project, Candidate, Consultant } from '../interfaces';
import { ProjectService } from '../../dashboards/projects/services/project-services.services';
import { CandidateService } from '../../dashboards/jobs/services/candidate.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'or-tools',
  standalone: true,
  imports: [SharedModule, FormsModule, CommonModule],
  templateUrl: './orTools.html',
  styleUrl: './orTools.scss'
})
export class OrTools implements OnInit {
  projects: Project[] = [];
  candidates: Candidate[] = [];
  consultants: Consultant[] = [];

  selectedConsultants: Consultant[] = [];
  maxDaysPerAssignment = 10;
  burnoutConsultants: { consultant: Consultant; score: number }[] = [];
  // Side-maps keyed by name — no interface pollution
  projectDemand: Record<string, number> = {};          // project.name  → days needed
  consultantAvail: Record<string, number> = {};        // consultant.name → days available
  skillMatch: Record<string, Record<string, number>> = {}; // consultant.name → project.name → 0|1

  result: any = null;
  loading = false;
  loadingPhase = 0;
  loadingMessages = [
    'Initializing constraint solver…',
    'Mapping skill matrices…',
    'Optimizing resource allocation…',
    'Running OR-Tools engine…',
    'Finalizing assignments…'
  ];
  loadingInterval: any;

  constructor(
    private http: HttpClient,
    private projectService: ProjectService,
    private candidateService: CandidateService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.projectService.getProjects().subscribe(projects => {
      this.projects = projects;
      projects.forEach(p => {
        this.projectDemand[p.name] ??= 5;
      });
      this.rebuildSkillMatrix();
    });

    this.candidateService.getAllCandidates().subscribe(res => (this.candidates = res));

    this.http.get<Consultant[]>(`${environment.apiUrl}/consultants`).subscribe(consultants => {
      this.consultants = consultants;
      consultants.forEach(c => {
        this.consultantAvail[c.name] ??= 10;
      });
      this.rebuildSkillMatrix();
    });
  }

  /** Recompute skill_match whenever projects or consultants change. */
  rebuildSkillMatrix(): void {
    this.consultants.forEach(c => {
      if (!c?.name) return;
      this.skillMatch[c.name] ??= {};
      this.projects.forEach(p => {
        if (!p?.name) return;
        if (this.skillMatch[c.name][p.name] === undefined) {
          this.skillMatch[c.name][p.name] = this.inferMatch(c, p);
        }
      });
    });
  }

  /** Heuristic: 1 if any expertise keyword appears in the project name. */
  inferMatch(c: Consultant, p: Project): number {
    if (!c?.expertise || !p?.name) return 0;
    const keywords = c.expertise.toLowerCase().split(/[\s,;]+/).filter(w => w.length > 2);
    return keywords.some(k => p.name.toLowerCase().includes(k)) ? 1 : 0;
  }

  // ── Consultant selection ──────────────────────────────────────────────────

  toggleConsultant(c: Consultant): void {
    const idx = this.selectedConsultants.findIndex(s => s.id === c.id);
    if (idx > -1) this.selectedConsultants.splice(idx, 1);
    else this.selectedConsultants.push(c);
  }

  isSelectedConsultant(c: Consultant): boolean {
    return this.selectedConsultants.some(s => s.id === c.id);
  }

  // ── Skill-match toggle (manual override) ─────────────────────────────────

  getSkillMatch(c: Consultant, p: Project): number {
    return this.skillMatch[c.name]?.[p.name] ?? 0;
  }

  toggleSkillMatch(c: Consultant, p: Project): void {
    this.skillMatch[c.name] ??= {};
    this.skillMatch[c.name][p.name] = this.getSkillMatch(c, p) === 1 ? 0 : 1;
  }

  // ── Build API body ────────────────────────────────────────────────────────

  buildRequestBody(): object {
    const projectNames = this.projects.map(p => p.name);
    const consultantNames = this.selectedConsultants.map(c => c.name);

    const availability: Record<string, number> = {};
    consultantNames.forEach(n => (availability[n] = this.consultantAvail[n] ?? 10));

    const project_demand: Record<string, number> = {};
    projectNames.forEach(n => (project_demand[n] = this.projectDemand[n] ?? 5));

    // skill_match: each consultant maps to a binary array ordered by projects
    const skill_match: Record<string, number[]> = {};
    this.selectedConsultants.forEach(c => {
      skill_match[c.name] = projectNames.map(pn => this.skillMatch[c.name]?.[pn] ?? 0);
    });

    return {
      consultants: consultantNames,
      projects: projectNames,
      availability,
      project_demand,
      skill_match,
      max_days_per_assignment: this.maxDaysPerAssignment
    };
  }

  // ── Solve ─────────────────────────────────────────────────────────────────

  solve(): void {
    if (!this.canSolve()) return;

    this.loading = true;
    this.loadingPhase = 0;
    this.result = null;

    this.loadingInterval = setInterval(() => {
      this.loadingPhase = (this.loadingPhase + 1) % this.loadingMessages.length;
    }, 1200);

    const body = this.buildRequestBody();
    console.log('OR-Tools request:', body);

    this.http.post(`${environment.apiUrl}/solve`, body).subscribe({
      next: (res: any) => {

        this.result = {
          ...res,
          assignments: res.assignments ?? res.final_assignment
        };

        this.burnoutConsultants = this.selectedConsultants
          .map(c => ({
            consultant: c,
            score: Math.round((res.burnout_scores?.[c.name] ?? 0) * 100)
          }))
          .sort((a, b) => b.score - a.score);

        this.loading = false;
      },
      error: () => {
        clearInterval(this.loadingInterval);
        this.loading = false;
      }
    });
  }

 // ── Result helpers ────────────────────────────────────────────────────────────
 // FIXED: iterates over this.projects directly so ALL projects always appear,
 // even if result.assignments is missing or has no entry for that project.
 getAssignedDaysForCell(consultantName: string, projectName: string): number {
   if (!this.result?.assignments) return 0;
   console.log(
       consultantName,
       projectName,
       this.result?.assignments?.[consultantName]?.[projectName]
     );

   const consultantMap = this.result.assignments[consultantName];
   if (!consultantMap) return 0;
   return consultantMap[projectName] ?? 0;
 }
getProjectTotals(): { project: string; total: number; demand: number }[] {
  return this.projects.map(p => {
    let total = 0;
    if (this.result?.assignments) {
      for (const consultantMap of Object.values(this.result.assignments) as Record<string, number>[]) {
        total += consultantMap?.[p.name] ?? 0;
      }
    }
    return {
      project: p.name,
      total,
      demand: this.projectDemand[p.name] ?? 0
    };
  });
}

getUtilizationPercent(consultantName: string): number {
  if (!this.result?.assignments?.[consultantName]) return 0;
  const assigned = Object.values(
    this.result.assignments[consultantName] as Record<string, number>
  ).reduce((a, b) => a + b, 0);
  const avail = this.consultantAvail[consultantName] ?? 1;
  return Math.min(100, Math.round((assigned / avail) * 100));
}

canSolve(): boolean {
  return this.selectedConsultants.length > 0 && !this.loading;
}

trackById(_: number, item: Project | Candidate | Consultant): number {
  return item.id;
}

 // ── Burnout indicators ────────────────────────────────────────────────────────
getBurnoutScore(consultantName: string): number {
  const util = this.getUtilizationPercent(consultantName);
  const avail = this.consultantAvail[consultantName] ?? 1;
  const assigned = this.getAssignedDays(consultantName);
  const overloadRatio = Math.min(100, Math.round((assigned / avail) * 100));
  return Math.min(100, Math.round(util * 0.6 + overloadRatio * 0.4));
}

getAssignedDays(consultantName: string): number {
  if (!this.result?.assignments?.[consultantName]) return 0;
  return Object.values(
    this.result.assignments[consultantName] as Record<string, number>
  ).reduce((a, b) => a + b, 0);
}

getBurnoutLevel(score: number): 'safe' | 'watch' | 'risk' | 'critical' {
  if (score >= 90) return 'critical';
  if (score >= 70) return 'risk';
  if (score >= 40) return 'watch';
  return 'safe';
}

getBurnoutLabel(score: number): string {
  const level = this.getBurnoutLevel(score);
  return { safe: 'Safe', watch: 'Watch', risk: 'At Risk', critical: 'Critical' }[level];
}

getBurnoutIcon(score: number): string {
  const level = this.getBurnoutLevel(score);
  return { safe: '●', watch: '◐', risk: '▲', critical: '⚠' }[level];
}

getBurnoutInsight(c: Consultant): string {
  const score = this.getBurnoutScore(c.name);
  const level = this.getBurnoutLevel(score);
  const days = this.getAssignedDays(c.name);
  const avail = this.consultantAvail[c.name] ?? 0;
  const projectCount = this.result?.assignments?.[c.name]
    ? Object.values(this.result.assignments[c.name] as Record<string, number>).filter(d => d > 0).length
    : 0;

  if (level === 'critical') return `Assigned ${days}d across ${projectCount} project(s) — exceeds safe capacity. Immediate rebalancing recommended.`;
  if (level === 'risk')     return `${days}d assigned of ${avail}d available across ${projectCount} project(s). Monitor closely.`;
  if (level === 'watch')    return `${days}d assigned of ${avail}d available. Within limits but leave buffer for ad-hoc tasks.`;
  return `${days}d assigned of ${avail}d available. Healthy workload — capacity remains available.`;
}

 // FIXED: no longer gates on result.assignments — always returns all selectedConsultants
 // so the burnout section is never empty after solving.
getBurnoutConsultants(): { consultant: Consultant; score: number }[] {
  if (!this.result) return [];
  return this.selectedConsultants.map(c => ({
    consultant: c,
    score: this.getBurnoutScore(c.name)
  })).sort((a, b) => b.score - a.score);
}
}
