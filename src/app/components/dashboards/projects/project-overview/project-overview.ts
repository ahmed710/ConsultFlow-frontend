import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../services/project-services.services';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-project-overview',
  standalone: true,
  imports: [CommonModule,RouterModule,],
  templateUrl: './project-overview.html',
  styleUrl: './project-overview.scss'
})
export class ProjectOverview implements OnInit {

  project: any;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    const documentId = this.route.snapshot.paramMap.get('id');

    if (documentId) {
      this.projectService.getProjectById(documentId).subscribe({
        next: (data) => {
          this.project = data;
          this.loading = false;
        },
        error: (err) => {
          console.error(err);
          this.loading = false;
        }
      });
    }
  }
}
