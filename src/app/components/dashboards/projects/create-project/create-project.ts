import { Component, ViewChild } from '@angular/core';
import { TagInputModule } from 'ngx-chips';
import * as FilePond from 'filepond';
import { FilePondComponent, FilePondModule } from 'ngx-filepond';
import { QuillModule } from 'ngx-quill';
import { SharedModule } from '../../../../shared/shared.module';
import { ProjectService, CreateProjectRequest } from '../services/project-services.services';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Select {
  value: string | number;
  label: string;
}

interface Tag {
  value: string;
  display?: string;
}

@Component({
  selector: 'app-create-project',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    QuillModule,
    FilePondModule,
    TagInputModule
  ],
  templateUrl: './create-project.html',
  styleUrls: ['./create-project.scss']
})
export class CreateProject {
  constructor(private projectService: ProjectService) {}

  // Form fields
  projectId = '';       // Added ID field
  projectName = '';
  projectManager = '';
  clientId = '';
  description = '';
  startDate = '';
  endDate = '';
  status: Select | null = null;
  priority: Select | null = null;
  assignedTo: Select[] = [];
  tags: Tag[] = [];
  budget = 0;
  riskLevel = 0;

  // FilePond
  @ViewChild('myPond') myPond!: FilePondComponent;
  pondOptions: FilePond.FilePondOptions = {
    allowMultiple: true,
    labelIdle: 'Drag & Drop Your files here to Upload...'
  };
  pondFiles: FilePond.FilePondOptions['files'] = [];

  // Quill toolbar
  modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ header: 1 }, { header: 2 }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }],
      [{ indent: '-1' }, { indent: '+1' }],
      [{ direction: 'rtl' }],
      [{ size: ['small', false, 'large', 'huge'] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ['clean'],
      ['link', 'image', 'video']
    ]
  };

  // Select options
  StatusSelect: Select[] = [
    { value: 'Completed', label: 'Completed' },
    { value: 'Inprogress', label: 'Inprogress' },
    { value: 'On-hold', label: 'On-hold' },
    { value: 'Active', label: 'Active' }
  ];

  Priority: Select[] = [
    { label: 'High', value: 1 },
    { label: 'Medium', value: 2 },
    { label: 'Low', value: 3 }
  ];

  AsignSelect: Select[] = [
    { value: 'Angelina May', label: 'Angelina May' },
    { value: 'Kiara advain', label: 'Kiara advain' },
    { value: 'Hercules Jhon', label: 'Hercules Jhon' },
    { value: 'Mayor Kim', label: 'Mayor Kim' },
    { value: 'Alexa Biss', label: 'Alexa Biss' },
    { value: 'Karley Dia', label: 'Karley Dia' },
    { value: 'Kim Jong', label: 'Kim Jong' },
    { value: 'Darren Sami', label: 'Darren Sami' },
    { value: 'Elizabeth', label: 'Elizabeth' },
    { value: 'Bear Gills', label: 'Bear Gills' },
    { value: 'Alex Carey', label: 'Alex Carey' }
  ];

  // FilePond handlers
  pondHandleInit() {
    console.log('FilePond initialized');
  }

  pondHandleAddFile(event: any) {
    console.log('File added:', event);
  }

  pondHandleActivateFile(event: any) {
    console.log('File activated:', event);
  }

  // Helper method to format datetime-local to YYYY-MM-DD
formatDateForBackend(dateString: string): string {
  if (!dateString) return '';

  // dateString = "YYYY-MM-DD"
  const [year, month, day] = dateString.split('-').map(Number);

  // Create UTC date explicitly
  const utcDate = new Date(Date.UTC(year, month - 1, day, 0, 0, 0));

  return utcDate.toISOString(); // "YYYY-MM-DDT00:00:00.000Z"
}

  // Helper method to convert tags to string array
  formatTagsForBackend(tags: Tag[]): string[] {
    if (!tags || tags.length === 0) return [];

    return tags.map(tag => {
      // If tag is an object with 'value' property, extract it
      if (typeof tag === 'object' && tag.value) {
        return tag.value.toString();
      }
      // If tag is already a string, return it
      if (typeof tag === 'string') {
        return tag;
      }
      // Fallback: convert to string
      return String(tag);
    });
  }

  // Generate a unique ID for the project
  generateProjectId(): string {
    // Option 1: Simple timestamp-based ID
    return `PRJ_${Date.now()}`;

    // Option 2: UUID-like ID (if you prefer)
    // return `PRJ_${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  }

  // Submit project
  createProject() {
    // Validation
    if (!this.projectName || this.projectName.trim() === '') {
      alert('Please enter a project name');
      return;
    }

    if (!this.projectManager || this.projectManager.trim() === '') {
      alert('Please enter a project manager ID');
      return;
    }

    if (!this.clientId || this.clientId.trim() === '') {
      alert('Please enter a client ID');
      return;
    }

    if (!this.startDate || !this.endDate) {
      alert('Please select start and end dates');
      return;
    }

    if (!this.status) {
      alert('Please select a status');
      return;
    }

    if (!this.priority) {
      alert('Please select a priority');
      return;
    }

    // Build payload matching backend expected format
const payload: CreateProjectRequest = {
  id: this.projectId.trim() || this.generateProjectId(),
  name: this.projectName.trim(),
  clientId: this.clientId.trim(),
  idManager: this.projectManager.trim(),
  description: this.description.trim() || '',
  startDate: this.formatDateForBackend(this.startDate),
  endDate: this.formatDateForBackend(this.endDate),
  status: this.status.value.toString(),
  priority: Number(this.priority.value),
  riskLevel: Number(this.riskLevel) || 0,
  budget: Number(this.budget) || 0,
  assignedTo: this.assignedTo.map(a => a.value.toString()),
  tags: this.formatTagsForBackend(this.tags)
};


    console.log('Creating project with payload:', payload);
    console.log('Payload as JSON:', JSON.stringify(payload, null, 2));

    this.projectService.createProject(payload).subscribe({
      next: (response) => {
        console.log('Project created successfully:', response);
        alert('Project created successfully 🚀');
        this.resetForm();
      },
      error: (err) => {
        console.error('Error creating project:', err);
        console.error('Error status:', err.status);
        console.error('Error response:', err.error);

        // Display detailed error information
        let errorMessage = 'Project creation failed';

        if (err.error?.message) {
          errorMessage = err.error.message;
        } else if (err.error?.errors) {
          // Handle validation errors
          const errors = Object.entries(err.error.errors)
            .map(([key, value]) => `${key}: ${value}`)
            .join('\n');
          errorMessage = `Validation errors:\n${errors}`;
        } else if (err.error) {
          errorMessage = JSON.stringify(err.error);
        } else if (err.message) {
          errorMessage = err.message;
        }

        alert(errorMessage);
      }
    });
  }

  // Reset form after successful submission
  resetForm() {
    this.projectId = '';
    this.projectName = '';
    this.projectManager = '';
    this.clientId = '';
    this.description = '';
    this.startDate = '';
    this.endDate = '';
    this.status = null;
    this.priority = null;
    this.assignedTo = [];
    this.tags = [];
    this.budget = 0;
    this.riskLevel = 0;

    // Reset FilePond files array
    this.pondFiles = [];
  }
}
