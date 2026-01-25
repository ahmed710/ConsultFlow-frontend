import { Component } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../shared/shared.module';
import { SpkDropdowns } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns';
import { SpkReusableTables } from '../../../@spk/spk-reusable-tables/spk-reusable-tables';
import { SpkFlatpickr } from '../../../@spk/spk-reusable-plugins/spk-flatpickr/spk-flatpickr';
import { SpkNgSelect } from '../../../@spk/spk-reusable-plugins/spk-ng-select/spk-ng-select';

interface TaskCategory {
  id: number;
  name: string;
  icon: string;
  badgeCount?: number;
  active?: boolean;
}
interface Category {
  id: number;
  name: string;
  iconClass: string;
  textColor: string;
}
interface Todotable {
  id: number;
  title: string;
  assignee: {
      name: string;
      avatar: string;
  };
  priority: 'High' | 'Medium' | 'Low';
  dueDate: string;
  status: 'In Progress' | 'Pending' | 'Completed';
  createdDate: string;
  progress: number;
  priorityColor:string;
  checked:boolean
  statusColor:string;
}

@Component({
  selector: 'app-todo-list',
  imports: [SharedModule, SpkDropdowns, CdkDropList, CdkDrag, SpkReusableTables, SpkFlatpickr, SpkNgSelect],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss'
})
export class TodoList {
  constructor(config: NgbModalConfig, private modalService: NgbModal,private sanitizer: DomSanitizer) {

  }
  getSanitizedSVG(svgContent: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgContent);
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }
  open(content: any) {
    this.modalService.open(content, { centered: true });
  }
  handleToggleSelectAll(checked: any) {
    this.tasks.forEach(task => task.checked = checked);
    this.allTasksChecked = checked;
  }

  allTasksChecked: boolean=false;
  Assigned=[
    {label:"Angelina May",value:1},
    {label:"Sarah Ruth",value:2},
    {label:"Hercules Jhon",value:3},
    {label:"Mayor Kim",value:4},
  ]
  selectedChoices = [1];
  Status=[
    {label:'In progress',value:1},
    {label:'Not Started',value:2},
    {label:'Completed',value:3},
    {label:'Pending',value:4},
  ]
  Priority=[
    {label:'Critical',value:1},
    {label:'High',value:2},
    {label:'Medium',value:3},
    {label:'Low',value:4},

  ]
  todoColumn=[
    {header:"",field:"",tableHeadColumn:"todolist-handle-drag"},
    {header:"Task Title",field:"Task Title",},
    {header:"Assigned To",field:"Assigned To"},
    {header:"Priority",field:"Priority",},
    {header:"Due Date",field:"Due Date"},
    {header:"Status",field:"Status"},
    {header:"Created On",field:"Created On"},
    {header:"Progress",field:"Progress",tableHeadColumn:"todolist-progress"},
    {header:"Action",field:"Action",tableHeadColumn:"text-end"},
  ];
  tasks: Todotable[] = [
    {
      id: 1,
      title: 'Design Homepage',
      assignee: {
          name: 'John Doe',
          avatar: './assets/images/faces/12.jpg',
      },
      priority: 'High',
      priorityColor:'danger',
      dueDate: '2025-03-10',
      status: 'In Progress',
      statusColor:'success',
      createdDate: '2025-03-01',
      progress: 40,
      checked:false
  },
    {
        id: 2,
        title: 'Develop Login Page',
        assignee: {
            name: 'Jane Smith',
            avatar: './assets/images/faces/4.jpg',
        },
        priority: 'Medium',
        priorityColor:'warning',
        dueDate: '2025-03-15',
        status: 'Pending',
        statusColor:'warning',
        createdDate: '2025-03-02',
        progress: 20,
        checked:false
    },
    {
        id: 3,
        title: 'Write Documentation',
        assignee: {
            name: 'Sarah Lee',
            avatar: './assets/images/faces/6.jpg',
        },
        priority: 'Low',
        priorityColor:'success',
        dueDate: '2025-03-20',
        status: 'Completed',
        statusColor:'primary',
        createdDate: '2025-03-03',
        progress: 100,
        checked:false
    },
    {
        id: 4,
        title: 'Test Payment Gateway',
        assignee: {
            name: 'Michael Brown',
            avatar: './assets/images/faces/10.jpg',
        },
        priority: 'High',
        priorityColor:'danger',
        dueDate: '2025-03-18',
        status: 'In Progress',
        statusColor:'success',
        createdDate: '2025-03-05',
        progress: 40,
        checked:false
    },
    {
        id: 5,
        title: 'Fix UI Bugs',
        assignee: {
            name: 'Emily Clark',
            avatar: './assets/images/faces/7.jpg',
        },
        priority: 'High',
        priorityColor:'danger',
        dueDate: '2025-03-12',
        status: 'Pending',
        statusColor:'warning',
        createdDate: '2025-03-02',
        progress: 10,
        checked:false
    },
    {
        id: 6,
        title: 'Update Blog Section',
        assignee: {
            name: 'Chris Martin',
            avatar: './assets/images/faces/11.jpg',
        },
        priority: 'High',
        priorityColor:'danger',
        dueDate: '2025-03-12',
        status: 'Pending',
        statusColor:'warning',
        createdDate: '2025-03-02',
        progress: 10,
        checked:false
    },
    {
        id: 7,
        title: 'Set Up Email Campaign',
        assignee: {
            name: 'Olivia White',
            avatar: './assets/images/faces/5.jpg',
        },
        priority: 'Medium',
        priorityColor:'warning',
        dueDate: '2025-03-22',
        status: 'In Progress',
        statusColor:'success',
        createdDate: '2025-03-03',
        progress: 50,
        checked:false
    },
    {
        id: 8,
        title: 'Review SEO Reports',
        assignee: {
            name: 'James Brown',
            avatar: './assets/images/faces/15.jpg',
        },
        priority: 'Low',
        priorityColor:'success',
        dueDate: '2025-03-17',
        status: 'Pending',
        statusColor:'warning',
        createdDate: '2025-03-01',
        progress: 0,
        checked:false
    },
    {
        id: 9,
        title: 'Prepare Client Demo',
        assignee: {
            name: 'Sophia Green',
            avatar: './assets/images/faces/8.jpg',
        },
        priority: 'High',
        priorityColor:'danger',
        dueDate: '2025-03-14',
        status: 'In Progress',
        statusColor:'success',
        createdDate: '2025-03-02',
        progress: 80,
        checked:false
    },
    {
        id: 10,
        title: 'Update User Profiles',
        assignee: {
            name: 'Noah Wilson',
            avatar: './assets/images/faces/16.jpg',
        },
        priority: 'Low',
        priorityColor:'success',
        dueDate: '2025-03-28',
        status: 'Pending',
        statusColor:'warning',
        createdDate: '2025-03-06',
        progress: 0,
        checked:false
    }
];
TodoCategories: TaskCategory[] = [
  {
    id: 1,
    name: 'All Tasks',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><rect x="40" y="40" width="176" height="176" rx="8" opacity="0.2"></rect><polyline points="88 136 112 160 168 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><rect x="40" y="40" width="176" height="176" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect></svg>',
    badgeCount: 55,
    active: true,
  },
  {
    id: 2,
    name: 'Assigned',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="96" r="64" opacity="0.2"></circle><circle cx="128" cy="96" r="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><path d="M32,216c19.37-33.47,54.55-56,96-56s76.63,22.53,96,56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>',
  },
  {
    id: 3,
    name: 'Starred',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,189.09l54.72,33.65a8.4,8.4,0,0,0,12.52-9.17l-14.88-62.79,48.7-42A8.46,8.46,0,0,0,224.27,94L160.36,88.8,135.74,29.2a8.36,8.36,0,0,0-15.48,0L95.64,88.8,31.73,94a8.46,8.46,0,0,0-4.79,14.83l48.7,42L60.76,213.57a8.4,8.4,0,0,0,12.52,9.17Z" opacity="0.2"></path><path d="M128,189.09l54.72,33.65a8.4,8.4,0,0,0,12.52-9.17l-14.88-62.79,48.7-42A8.46,8.46,0,0,0,224.27,94L160.36,88.8,135.74,29.2a8.36,8.36,0,0,0-15.48,0L95.64,88.8,31.73,94a8.46,8.46,0,0,0-4.79,14.83l48.7,42L60.76,213.57a8.4,8.4,0,0,0,12.52,9.17Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>',
  },
  {
    id: 4,
    name: 'Deleted',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z" opacity="0.2"></path><line x1="216" y1="56" x2="40" y2="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="104" y1="104" x2="104" y2="168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="152" y1="104" x2="152" y2="168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>',
  },
];
Categories: Category[] = [
  {
    id: 1,
    name: 'Personal',
    iconClass: 'ri-circle-fill fs-8 fw-medium',
    textColor: 'text-primary',
  },
  {
    id: 2,
    name: 'Work',
    iconClass: 'ri-circle-fill fs-8 fw-medium',
    textColor: 'text-secondary',
  },
  {
    id: 3,
    name: 'Health & Fitness',
    iconClass: 'ri-circle-fill fs-8 fw-medium',
    textColor: 'text-warning',
  },
  {
    id: 4,
    name: 'Daily Goals',
    iconClass: 'ri-circle-fill fs-8 fw-medium',
    textColor: 'text-success',
  },
  {
    id: 5,
    name: 'Financial Management',
    iconClass: 'ri-circle-fill fs-8 fw-medium',
    textColor: 'text-danger',
  },
];
}
