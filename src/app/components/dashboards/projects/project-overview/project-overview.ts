import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkReusableTables } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables';
import { SpkDropdowns } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns';

interface Task {
  id: number;
  title: string;
};

interface Badge {
  label: string;
  className: string;
};

interface FileItem {
  id: number;
  name: string;
  size: string;
  img: string;
  imgclass:string
};

interface Message {
  id: number;
  avatar: string;
  name: string;
  role: string;
  time: string;
  message: string;
  attachment?: {
    img: string;
    size: string;
  };
};

interface TodoItem {
  id: number;
  title: string;
  status: 'Not Started' | 'Completed' | 'Pending';
  badgeClass: string;
  date: string;
  checked: boolean;
};

@Component({
  selector: 'app-project-overview',
  imports: [SharedModule, RouterModule, NgbTooltipModule, NgbModule, FormsModule, ReactiveFormsModule, CdkDropList, CdkDrag, SpkReusableTables, SpkDropdowns],
  templateUrl: './project-overview.html',
  styleUrl: './project-overview.scss'
})
export class ProjectOverview {
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.TodoItems, event.previousIndex, event.currentIndex);
  }

 Tasks: Task[] = [
    { id: 1, title: 'Create wireframes for homepage' },
    { id: 2, title: 'Design product pages (UI)' },
    { id: 3, title: 'Design product pages (UI)' },
];


 Badges: Badge[] = [
    { label: 'UI/UX Design', className: 'bg-primary-transparent' },
    { label: 'Front-End Development', className: 'bg-secondary-transparent' },
    { label: 'Back-End Development', className: 'bg-warning-transparent' },
    { label: 'Quality Assurance', className: 'bg-info-transparent' },
    { label: 'Project Management', className: 'bg-success-transparent' },
    { label: 'SEO Optimization', className: 'bg-danger-transparent' },
];


 Filedocument: FileItem[] = [
    { id: 1, name: 'Project_Proposal.pdf', size: '1.2MB',imgclass:"p-2", img: './assets/images/media/file-manager/1.png' },
    { id: 2, name: 'Design_Mockups.zip', size: '1.5MB',imgclass:"", img: './assets/images/media/file-manager/3.png' },
    { id: 3, name: 'Project_Timeline.xlsx', size: '256KB',imgclass:"p-2", img: './assets/images/media/file-manager/1.png' },
    { id: 4, name: 'Contract_Agreement.pdf', size: '1.8MB',imgclass:"p-2", img: './assets/images/media/file-manager/1.png' },
];


 TimelineMessages: Message[] = [
    {
      id: 1,
      avatar: "./assets/images/faces/13.jpg",
      name: "John",
      role: "Project Manager",
      time: "March 25, 2025 - 09:15 AM",
      message:
        "Hey team, I think we’re all set to begin with the initial setup for this project. We need to start by finalizing the tech stack and setting up the development environment. Does everyone have the required tools and access?",
    },
    {
      id: 2,
      avatar: "./assets/images/faces/1.jpg",
      name: "Sara",
      role: "Frontend Developer",
      time: "March 25, 2025 - 09:30 AM",
      message:
        "Yes, I’ve installed the latest version of Node.js and set up my local environment. I’m ready to start with the frontend. Is React the final choice for the frontend framework?",
    },
    {
      id: 3,
      avatar: "./assets/images/faces/13.jpg",
      name: "John",
      role: "Project Manager",
      time: "March 25, 2025 - 09:45 AM",
      message:
        "Yes, React it is! We’ll be using it for the UI components. Make sure to check the latest design files in the shared folder before starting the layout work.",
      attachment: {
        img: "./assets/images/media/file-manager/3.png",
        size: " 728.62KB",
      },
    },
    {
      id: 4,
      avatar: "./assets/images/faces/14.jpg",
      name: "Mark",
      role: "Backend Developer",
      time: "March 25, 2025 - 10:00 AM",
      message:
        "I’ve got everything set up on my end. I’m ready to integrate with the backend APIs. Can you confirm if we are using Node.js for the backend or are we sticking to Laravel?",
    },
    {
      id: 5,
      avatar: "./assets/images/faces/13.jpg",
      name: "Mark",
      role: "Backend Developer",
      time: "March 25, 2025 - 10:10 AM",
      message:
        "We’re going with Laravel for the backend, so you can go ahead and start with the API structure. I’ll make sure to share the database schema by the end of the day.",
    },
];


 TodoItems: TodoItem[] = [
    {
      id: 1,
      title: "Follow up with client about design revisions",
      status: "Not Started",
      badgeClass: "bg-info-transparent",
      date: "17,May",
      checked: true,
    },
    {
      id: 2,
      title: "Finalize website content",
      status: "Completed",
      badgeClass: "bg-success-transparent",
      date: "17,May",
      checked: false,
    },
    {
      id: 3,
      title: "Test website for mobile responsiveness",
      status: "Not Started",
      badgeClass: "bg-info-transparent",
      date: "18,May",
      checked: false,
    },
    {
      id: 4,
      title: "Set up database connection",
      status: "Pending",
      badgeClass: "bg-warning-transparent",
      date: "19,May",
      checked: true,
    },
    {
      id: 5,
      title: "Complete user authentication system",
      status: "Not Started",
      badgeClass: "bg-info-transparent",
      date: "21,May",
      checked: true,
    },
    {
      id: 6,
      title: "Prepare final demo for client approval",
      status: "Not Started",
      badgeClass: "bg-info-transparent",
      date: "27,May",
      checked: true,
    },
  ];

  projectColumn=[
    {header:"",field:"",tableHeadColumn:'todolist-handle-drag'},
    {header:"Task Title",field:"Task Title"},
    {header:"Status",field:"Status"},
    {header:"End Date",field:"End Date"},
    {header:"Action",field:"Action"}
  ]

}
