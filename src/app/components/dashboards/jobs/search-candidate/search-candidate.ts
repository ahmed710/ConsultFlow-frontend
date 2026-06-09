import { Component, OnInit } from '@angular/core';
import { NgbCollapseModule, NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as noUiSlider from 'nouislider';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkNgSelect } from '../../../../@spk/spk-reusable-plugins/spk-ng-select/spk-ng-select';
import { SpkDropdowns } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns';
import { SpkReusableTables } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables';
import { CandidateService } from '../services/candidate.service';
import { Router } from '@angular/router';

interface Skill {
  name: string;
  color: string;
}

interface Candidate {
  id: string;
  fullName: string;
  jobTitle: string;
  location: string;
  experienceYears: number;
  education: string;
  skills: string[];
  jobType: string;
  salaryRange: string;
  availability: string;
}

@Component({
  selector: 'app-search-candidate',
  standalone: true,
  imports: [
    SharedModule,
    NgbCollapseModule,
    NgbDropdownModule,
    NgbModule,
    SpkNgSelect,
    SpkDropdowns,
    SpkReusableTables
  ],
  templateUrl: './search-candidate.html',
  styleUrl: './search-candidate.scss'
})
export class SearchCandidate implements OnInit {

  constructor(private candidateService: CandidateService,private router: Router) {}

  isCollapsed = true;
  isCollapsed1 = true;

  lowerValue: number = 0;
  upperValue: number = 50000;

  candidates: Candidate[] = [];

  CandidateHeader = [
    { header: 'Details' },
    { header: 'Education' },
    { header: 'Skills' },
    { header: 'Job Type' },
    { header: 'Salary Expectation' },
    { header: 'Availability' },
    { header: 'Actions', tableHeadColumn: "text-center" },
  ];

  ngOnInit(): void {
    this.loadCandidates();
  }

  loadCandidates() {
    this.candidateService.getAllCandidates().subscribe({
      next: (data) => {
        this.candidates = data;
      },
      error: (err) => {
        console.error('Error loading candidates', err);
      }
    });
  }

  ngAfterViewInit(): void {
    const slider = document.getElementById('nonlinear') as noUiSlider.target;

    if (!slider) return;

    noUiSlider.create(slider, {
      start: [this.lowerValue, this.upperValue],
      connect: true,
      range: {
        min: 0,
        max: 50000
      }
    });

    const lowerValueElem: any = document.getElementById('lower-value');
    const upperValueElem: any = document.getElementById('upper-value');

    slider.noUiSlider?.on('update', (values: any, handle: number) => {
      if (handle === 0) {
        this.lowerValue = Math.round(values[0]);
        lowerValueElem.innerHTML = this.lowerValue;
      } else {
        this.upperValue = Math.round(values[1]);
        upperValueElem.innerHTML = this.upperValue;
      }
    });
  }

  // fallback skill color generator
  getSkillColor(index: number): string {
    const colors = ['primary', 'success', 'info', 'warning', 'danger'];
    return colors[index % colors.length];
  }

  goToDetails(candidateId: string) {
    this.router.navigate(['/dashboards/jobs/candidate-details', candidateId]);
  }
}
