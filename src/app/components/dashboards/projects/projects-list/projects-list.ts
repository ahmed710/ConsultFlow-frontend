import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Router} from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkNgSelect } from '../../../../@spk/spk-reusable-plugins/spk-ng-select/spk-ng-select';
import { SpkReusableTables } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables';
import { SpkDropdowns } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns';
import { ProjectService } from '../services/project-services.services';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [
    SharedModule,
    RouterModule,
    SpkNgSelect,
    CommonModule,
    SpkReusableTables,
    SpkDropdowns
  ],
  templateUrl: './projects-list.html',
  styleUrl: './projects-list.scss'
})
export class ProjectsList implements OnInit {

  constructor(private projectService: ProjectService,private router: Router) {}

  projectColumn = [
    { header: "Project Name" },
    { header: "Client Name" },
    { header: "Start Date" },
    { header: "End Date" },
    { header: "Status" },
    { header: "Budget (USD)" },
    { header: "Assigned Team" },
    { header: "Priority" },
    { header: "Actions" }
  ];

  Project = [
    { label: "Sort By", value: 1 },
    { label: "Newest", value: 2 },
    { label: "Date Added", value: 3 },
    { label: "Type", value: 4 },
    { label: "A - Z", value: 5 }
  ];

  statusBadgeClass: { [key: string]: string } = {
    "In Progress": "bg-info-transparent",
    "Completed": "bg-success-transparent",
    "Delayed": "bg-warning-transparent",
    "Not Started": "bg-light text-default"
  };

  priorityColorClass: { [key: string]: string } = {
    "High": "text-danger",
    "Medium": "text-info",
    "Low": "text-primary"
  };

  projectData: any[] = [];

  AvatarImages: string[] = [
    "./assets/images/faces/1.jpg",
    "./assets/images/faces/2.jpg",
    "./assets/images/faces/8.jpg",
    "./assets/images/faces/12.jpg",
    "./assets/images/faces/10.jpg",
    "./assets/images/faces/4.jpg",
    "./assets/images/faces/5.jpg",
    "./assets/images/faces/13.jpg"
  ];

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.getProjects().subscribe({
      next: (projects) => {
        this.projectData = projects.map(p => this.mapProjectToUI(p));
      },
      error: (err) => {
        console.error('Error loading projects:', err);
      }
    });
  }
 viewProject(id: string) {
    this.router.navigate(['/dashboards/projects', id]);
  }
  private mapProjectToUI(p: any) {
    return {
      id :p.id,
      name: p.name,
      companyLogo: './assets/images/company-logos/1.png',
      companyName: p.clientId,
      startDate: this.formatDate(p.startDate),
      endDate: this.formatDate(p.endDate),
      status: this.normalizeStatus(p.status),
      budget: `$${(p.budget ?? 0).toLocaleString()}`,
      team: this.fakeTeamAvatars(p.assignedTo?.length || 0),
      extraTeam: Math.max(0, (p.assignedTo?.length || 0) - 3),
      priority: this.mapPriority(p.priority)
    };
  }

  private formatDate(date: string): string {
    if (!date) return '';
    return new Date(date).toISOString().split('T')[0];
  }

  private mapPriority(priority: number): 'High' | 'Medium' | 'Low' {
    switch (priority) {
      case 1: return 'High';
      case 2: return 'Medium';
      case 3: return 'Low';
      default: return 'Low';
    }
  }

  private normalizeStatus(status: string): string {
    if (status === 'Inprogress') return 'In Progress';
    return status;
  }

  private fakeTeamAvatars(count: number): string[] {
    const avatars = [
      "./assets/images/faces/1.jpg",
      "./assets/images/faces/2.jpg",
      "./assets/images/faces/3.jpg",
      "./assets/images/faces/4.jpg",
      "./assets/images/faces/5.jpg"
    ];
    return avatars.slice(0, Math.min(count, 3));
  }
}
