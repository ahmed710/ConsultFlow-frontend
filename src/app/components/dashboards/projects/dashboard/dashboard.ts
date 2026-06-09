import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectService } from '../services/project-services.services';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkApexChart } from '../../../../@spk/spk-reusable-plugins/reusable-charts/spk-apex-charts/spk-apex-charts';
import { SpkReusableTables } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables';
import { SpkDropdowns } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns';
import { SpkProjectCard } from '../../../../@spk/reusable-dashboards/projects/spk-project-card/spk-project-card';

interface DashboardCard {
  id: number;
  title: string;
  price: number;
  svgIcon: string;
  svgColor: string;
  cardClass: string;
}

interface Project {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  status: 'Active' | 'Inprogress' | 'Completed' | 'Pending';
  progress: number;
  progressColor: string;
  avatars: string[];
  amount: string;
  tags: string[];
  priority: number;
  riskLevel: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    SharedModule,
    SpkProjectCard,
    FormsModule,
    CommonModule,
    SpkApexChart,
    SpkReusableTables
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {

  constructor(private projectService: ProjectService) {}


  /** ========================
   * DASHBOARD DATA
   ========================= */
  dashboardCards: DashboardCard[] = [];
  ProjectsSummary: Project[] = [];

  /** ========================
   * TABLE COLUMNS
   ========================= */
  ProjectsSummaryColumn = [
    { header: "Project Name" },
    { header: "Start Date" },
    { header: "End Date" },
    { header: "Status" },
    { header: "Progress" },
    { header: "Team" },
    { header: "Budget" },
    { header: "Actions" }
  ];

  /** ========================
   * CHARTS
   ========================= */
  ProjectOptions: any;
  TaskOptions: any;

  ngOnInit(): void {
    this.loadProjects();
  }

  /** ========================
   * LOAD PROJECTS FROM FIRESTORE (via backend)
   ========================= */
loadProjects(): void {
  this.projectService.getProjects().subscribe(projects => {

    this.ProjectsSummary = projects.map(p => ({
      id: p.id,
      name: p.name,
      startDate: this.formatDate(p.startDate),   // ← format ISO date
      endDate: this.formatDate(p.endDate),
      status: p.status,
      progress: this.calculateProgress(p.startDate, p.endDate, p.status),
      progressColor: this.getProgressColor(p.status),
      avatars: (p.assignedTo ?? []).length > 0 ? ['1.jpg', '2.jpg'] : [],
      amount: p.budget > 0 ? `$${p.budget.toLocaleString()}` : '—',
      tags: p.tags ?? [],
      priority: p.priority,
      riskLevel: p.riskLevel
    }));

    this.buildDashboardCards(projects);
    this.buildCharts(projects);
  });
}

  /** ========================
   * DASHBOARD CARDS
   ========================= */
  buildDashboardCards(projects: any[]): void {
    const total = projects.length;
    const completed = projects.filter(p => p.status === 'Completed').length;
    const inProgress = projects.filter(p => p.status === 'Inprogress').length;
    const active = projects.filter(p => p.status === 'Active').length;
    const pending = projects.filter(p => p.status === 'Pending').length;

    this.dashboardCards = [
      { id: 1, title: 'Total Projects',     price: total,      svgIcon: '', svgColor: 'primary',   cardClass: 'dashboard-main-card primary' },
      { id: 2, title: 'Active Projects',    price: active,     svgIcon: '', svgColor: 'success',   cardClass: 'dashboard-main-card success' },
      { id: 3, title: 'In Progress',        price: inProgress, svgIcon: '', svgColor: 'secondary', cardClass: 'dashboard-main-card secondary' },
      { id: 4, title: 'Pending Projects',   price: pending,    svgIcon: '', svgColor: 'warning',   cardClass: 'dashboard-main-card warning' },
    ];
  }

  /** ========================
   * CHART BUILDERS
   ========================= */
buildCharts(projects: any[]): void {
  const completed  = projects.filter(p => p.status === 'Completed').length;
  const inProgress = projects.filter(p => p.status === 'Inprogress').length;
  const active     = projects.filter(p => p.status === 'Active').length;
  const pending    = projects.filter(p => p.status === 'Pending').length;

  this.TaskOptions = {
    series: [active, inProgress, completed, pending],
    chart: { type: 'radialBar', height: 235 },
    labels: ['Active', 'In Progress', 'Completed', 'Pending'],
    colors: ['#198754', '#0d6efd', '#6f42c1', '#ffc107']
  };

  this.ProjectOptions = {
    series: [{ name: 'Projects', data: [active, inProgress, completed, pending] }],
    chart: { type: 'bar', height: 400 },
    xaxis: { categories: ['Active', 'In Progress', 'Completed', 'Pending'] }
  };
}

  /** ========================
   * HELPERS
   ========================= */
calculateProgress(start: string, end: string, status: string): number {
  if (status === 'Completed') return 100;
  if (status === 'Pending') return 0;

  // Date-based progress for Active / Inprogress
  const s = new Date(start).getTime();
  const e = new Date(end).getTime();
  const now = Date.now();

  if (now >= e) return 100;
  if (now <= s) return 0;
  return Math.round(((now - s) / (e - s)) * 100);
}

getProgressColor(status: string): string {
  const map: Record<string, string> = {
    Completed:  'success',
    Inprogress: 'primary',
    Active:     'info',
    Pending:    'warning'
  };
  return map[status] ?? 'secondary';
}

// Add this helper for clean date display
formatDate(iso: string): string {
  if (!iso) return '—';
  return new Date(iso).toLocaleDateString('en-GB', {
    day: '2-digit', month: 'short', year: 'numeric'
  }); // → "08 Apr 2026"
}
}
