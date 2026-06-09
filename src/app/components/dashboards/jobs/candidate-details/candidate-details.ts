import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../../shared/shared.module';
import { ActivatedRoute } from '@angular/router';
import { CandidateService } from '../services/candidate.service';

@Component({
  selector: 'app-candidate-details',
  standalone: true,
  imports: [SharedModule, CommonModule, NgbModule],
  templateUrl: './candidate-details.html',
  styleUrl: './candidate-details.scss'
})
export class CandidateDetails implements OnInit {

  candidate: any;

  ProjectsCandidate: any[] = [];
  Certifications: any[] = [];
  Preferences: any[] = [];
  PersonalInfoList: any[] = [];
  Skills: any[] = [];

  SocialLinks = [
    { iconClass: 'ti ti-brand-dribbble', buttonClass: 'btn-pink', title: 'Dribbble' },
    { iconClass: 'ti ti-brand-github', buttonClass: 'btn-github', title: 'Github' },
    { iconClass: 'ti ti-brand-behance', buttonClass: 'btn-primary', title: 'Behance' },
    { iconClass: 'ti ti-world', buttonClass: 'btn-success', title: 'Web' }
  ];

  constructor(
    private route: ActivatedRoute,
    private candidateService: CandidateService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '8ECiivteFrEXcJgibGbP';

    this.candidateService.getCandidate(id).subscribe({
      next: (data) => {
        this.candidate = data;
        this.mapData();
      },
      error: (err) => console.error(err)
    });
  }

  mapData() {
    if (!this.candidate) return;

    this.ProjectsCandidate = this.candidate.projects?.map((p: any) => ({
      title: p.name,
      description: p.description,
      logoSrc: './assets/images/company-logos/1.png',
      assignedDate: this.formatDate(p.startDate),
      dueDate: this.formatDate(p.endDate),
      status: p.status
    })) || [];

    // ✅ Certifications
    this.Certifications = this.candidate.certifications || [];

    // ✅ Preferences
    const pref = this.candidate.jobPreferences;
    this.Preferences = pref ? [
      { label: "Preferred Job Type", value: pref.preferredJobType },
      { label: "Preferred Salary", value: pref.preferredSalary },
      { label: "Availability", value: pref.availability },
      { label: "Preferred Location", value: pref.preferredLocation }
    ] : [];

    // ✅ Personal Info
    const p = this.candidate.personalInformation;
    this.PersonalInfoList = p ? [
      { label: 'Email', value: p.email, icon: 'ti-mail', class: 'text-truncate' },
      { label: 'Phone', value: p.phone, icon: 'ti-phone', class: '' },
      { label: 'Gender', value: p.gender, icon: 'ti-user', class: '' },
      { label: 'Date of Birth', value: this.formatDate(p.dateOfBirth), icon: 'ti-cake', class: '' },
      { label: 'Nationality', value: p.nationality, icon: 'ti-flag', class: '' },
      { label: 'Languages Known', value: p.languages?.join(', '), icon: 'ti-language', class: '' },
      { label: 'Address', value: p.address, icon: 'ti-map-pin', class: '' }
    ] : [];

    // ✅ Skills
    this.Skills = this.candidate.skills?.map((s: any) => ({
      name: s.name,
      progress: s.percentage,
      color: this.getSkillColor(s.percentage)
    })) || [];
  }

  formatDate(date: string) {
    return new Date(date).toLocaleDateString();
  }

  getSkillColor(value: number) {
    if (value > 80) return 'bg-success';
    if (value > 60) return 'bg-primary';
    if (value > 40) return 'bg-warning';
    return 'bg-danger';
  }
}
