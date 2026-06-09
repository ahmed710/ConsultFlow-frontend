import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { Project, Candidate, Consultant } from '../interfaces';
import { ProjectService } from '../../dashboards/projects/services/project-services.services';
import { CandidateService } from '../../dashboards/jobs/services/candidate.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-leaflet-maps',
  standalone: true,
  imports: [SharedModule, FormsModule],
  templateUrl: './leaflet-maps.html',
  styleUrl: './leaflet-maps.scss'
})
export class LeafletMaps implements OnInit {
  projects: Project[] = [];
  candidates: Candidate[] = [];
  consultants: Consultant[] = [];

  scenario: {
    project: Project | null;
    situation: string;
    selectedCandidates: Candidate[];
    selectedConsultants: Consultant[];
    extraContext: string;
  } = {
    project: null,
    situation: '',
    selectedCandidates: [],
    selectedConsultants: [],
    extraContext: ''
  };

  result: any = null;
  loading = false;

  constructor(private http: HttpClient,  private projectService: ProjectService,
                                         private candidateService: CandidateService,) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
  this.projectService.getProjects()
    .subscribe(res => this.projects = res);

  this.candidateService.getAllCandidates()
    .subscribe(res => this.candidates = res);
  this.http.get<Consultant[]>(`${environment.apiUrl}/consultants`)
    .subscribe(res => this.consultants = res);
  }

  toggleCandidate(c: Candidate) {
    const index = this.scenario.selectedCandidates.indexOf(c);
    index > -1
      ? this.scenario.selectedCandidates.splice(index, 1)
      : this.scenario.selectedCandidates.push(c);
  }

  isSelectedCandidate(c: Candidate) {
    return this.scenario.selectedCandidates.includes(c);
  }

  toggleConsultant(c: Consultant) {
    const index = this.scenario.selectedConsultants.indexOf(c);
    index > -1
      ? this.scenario.selectedConsultants.splice(index, 1)
      : this.scenario.selectedConsultants.push(c);
  }

  isSelectedConsultant(c: Consultant) {
    return this.scenario.selectedConsultants.includes(c);
  }

  generatePrompt(): string {
    const project = this.scenario.project?.name || 'Unknown Project';

    const candidates = this.scenario.selectedCandidates
      .map(c => `${c.fullName} (${c.skills})`)
      .join(', ');

    const consultants = this.scenario.selectedConsultants
      .map(c => `${c.name} (${c.expertise})`)
      .join(', ');

    return `
  You are an AI Project Optimizer.

  ⚠️ VERY IMPORTANT:
  - Return ONLY valid JSON
  - Do NOT include explanations
  - Do NOT include markdown
  - Do NOT include text before or after JSON
  - If you cannot comply, return an empty JSON {}

  JSON FORMAT TO FOLLOW EXACTLY:

  {
    "candidates": [
      {
        "name": "string",
        "score": number (0-100),
        "risk": "Low | Medium | High",
        "productivity": "string",
        "strengths": ["string"],
        "weaknesses": ["string"]
      }
    ],
    "recommended": "string",
    "riskLevel": "Low | Medium | High",
    "plan": [
      { "week": number, "tasks": ["string"] }
    ],
    "summary": "string"
  }

  DATA:

  Project: ${project}

  Situation:
  ${this.scenario.situation}

  Candidates:
  ${candidates}

  Consultants:
  ${consultants}

  Extra Context:
  ${this.scenario.extraContext}
  `;
  }

simulate() {
  const prompt = this.generatePrompt();
  this.loading = true;

  this.http.post(`${environment.apiUrl}/ai/simulate`, { prompt }).subscribe({
    next: (res: any) => {
      try {
        // res.result is a JSON string — parse it
        const raw = res?.result ?? res;
        this.result = typeof raw === 'string' ? JSON.parse(raw) : raw;
      } catch {
        this.result = res;
      }
      this.loading = false;
    },
    error: () => { this.loading = false; }
  });
}

situations: string[] = [
  'Lead developer resigned suddenly',
  'Client changed requirements mid-project',
  'Critical production bug',
  'Deadline reduced by 2 weeks'
];

randomSituation() {
  const randomIndex = Math.floor(Math.random() * this.situations.length);
  this.scenario.situation = this.situations[randomIndex];
}
}
