import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../../shared/shared.module';
interface Project {
  id: number;
  title: string;
  description: string;
  logoSrc: string;
  assignedDate: string;
  status: string;
  dueDate: string;
};
interface Certification {
  title: string;
  issuer: string;
  year: string;
};
interface Preference {
  label: string;
  value: string;
};
interface PersonalInfo {
  label: string;
  value: string;
  icon: string;
  class:string;
};
interface Skill {
  name: string;
  progress: number;
  color: string;
};
interface SocialLink {
  iconClass: string;
  buttonClass: string;
  title: string;
};
@Component({
  selector: 'app-candidate-details',
  imports: [SharedModule,CommonModule,NgbModule],
  templateUrl: './candidate-details.html',
  styleUrl: './candidate-details.scss'
})
export class CandidateDetails {

ProjectsCandidate: Project[] = [
    {
      id: 1,
      title: "Weather Forecast Web App",
      description: "A weather forecasting application using React and OpenWeatherMap API.",
      logoSrc: "./assets/images/company-logos/1.png",
      assignedDate: "January 10, 2025",
      status: "Completed",
      dueDate: "June 15, 2025",
    },
    {
      id: 2,
      title: "E-Commerce Website",
      description: "Developed a full-stack e-commerce site using Node.js and MongoDB.",
      logoSrc: "./assets/images/company-logos/10.png",
      assignedDate: "March 1, 2025",
      status: "Completed",
      dueDate: "September 30, 2025",
    },
];
Certifications: Certification[] = [
  {
    title: "Certified JavaScript Developer",
    issuer: "Code Academy",
    year: "2015",
  },
  {
    title: "Certified Scrum Master",
    issuer: "Scrum Alliance",
    year: "2017",
  },
  {
    title: "Certified Full-Stack Web Developer",
    issuer: "Code Academy",
    year: "2023",
  },
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Web Services (AWS)",
    year: "2024",
  },
];
Preferences: Preference[] = [
  { label: "Preferred Job Type", value: "Full-Time" },
  { label: "Preferred Salary", value: "$80,000 - $100,000 per year" },
  { label: "Availability", value: "Immediate" },
  { label: "Preferred Location", value: "Remote or New York" },
];
PersonalInfoList: PersonalInfo[] = [
  { label: 'Email', value: 'johndoe@example.com', icon: 'ti-mail' ,class:"text-truncate" },
  { label: 'Phone', value: '+1 234 567 8901', icon: 'ti-phone' ,class:""},
  { label: 'Gender', value: 'Male', icon: 'ti-gender-female' ,class:""},
  { label: 'Date of Birth', value: 'January 15, 1990', icon: 'ti-cake' ,class:""},
  { label: 'Nationality', value: 'American', icon: 'ti-flag',class:""},
  { label: 'Languages Known', value: 'English, Spanish', icon: 'ti-language',class:"" },
  { label: 'Address', value: '1234 Elm Street,New York,10001,United States', icon: 'ti-map-pin' ,class:""},
];
Skills: Skill[] = [
  { name: 'JavaScript', progress: 80, color: 'bg-primary' },
  { name: 'Python', progress: 64, color: 'bg-warning' },
  { name: 'React', progress: 53, color: 'bg-success' },
  { name: 'Node.js', progress: 90, color: 'bg-info' },
  { name: 'Mongo DB', progress: 35, color: 'bg-danger' },
  { name: 'My SQL', progress: 70, color: 'bg-secondary' },
];
SocialLinks: SocialLink[] = [
  {
    iconClass: 'ti ti-brand-dribbble',
    buttonClass: 'btn-pink',
    title: 'Dribbble',
  },
  {
    iconClass: 'ti ti-brand-github',
    buttonClass: 'btn-github',
    title: 'Github',
  },
  {
    iconClass: 'ti ti-brand-behance',
    buttonClass: 'btn-primary',
    title: 'Behance',
  },
  {
    iconClass: 'ti ti-world',
    buttonClass: 'btn-success',
    title: 'Web',
  },
  {
    iconClass: 'ti ti-brand-pinterest',
    buttonClass: 'btn-danger',
    title: 'Pinterest',
  },
];
}
