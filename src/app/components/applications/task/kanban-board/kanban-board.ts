import { ChangeDetectorRef, Component, ElementRef, inject, Renderer2, ViewChild } from '@angular/core';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { SortablejsModule } from '@maksim_m/ngx-sortablejs';
import { CommonModule } from '@angular/common';
import flatpickr from 'flatpickr';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { FilePondComponent, FilePondModule } from 'ngx-filepond';
import * as FilePond from 'filepond';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkKanbanboardCard } from '../../../../@spk/reusable-apps/spk-kanbanboard-card/spk-kanbanboard-card';
import { SpkNgSelect } from '../../../../@spk/spk-reusable-plugins/spk-ng-select/spk-ng-select';
import { SpkFlatpickr } from '../../../../@spk/spk-reusable-plugins/spk-flatpickr/spk-flatpickr';

@Component({
  selector: 'app-kanban-board',
  imports: [SharedModule, FormsModule,SpkKanbanboardCard,FilePondModule,FlatpickrModule, CommonModule, OverlayscrollbarsModule, SortablejsModule, SpkNgSelect, SpkFlatpickr],
  templateUrl: './kanban-board.html',
  providers: [NgbModalConfig, NgbModal,FlatpickrDefaults],
  styleUrl: './kanban-board.scss'
})
export class KanbanBoard {

  constructor(private cdr: ChangeDetectorRef) {
}  // selectedDate: Date | null = null;
flatpickrOptions: any = {
  inline: true,

};
// flatpickrOptions: FlatpickrOptions;
private modalService = inject(NgbModal);
ngOnInit() {

  this.flatpickrOptions = {
    enableTime: true,
    noCalendar: true,
    dateFormat: 'H:i',
  };

  flatpickr('#targetDate', this.flatpickrOptions)
}

@ViewChild("myPond") myPond!: FilePondComponent;

pondOptions: FilePond.FilePondOptions = {
  allowMultiple: true,
  labelIdle: "Drop files here to Upload...",
};
singlepondOptions: FilePond.FilePondOptions = {
  allowMultiple: false,
  labelIdle: "Drop files here to Upload...",
};

pondFiles: FilePond.FilePondOptions["files"] = [

];

pondHandleInit() {
}

pondHandleAddFile(event: any) {

}

pondHandleActivateFile(event: any) {
}

open(modal: any) {
  this.modalService.open(modal, { centered: true });
}
openTask(content1: any) {
  this.modalService.open(content1, { centered: true });
}


NewTasksOptions: any = {
  animation: 150,
  group: 'shared',
  // Your sortable options
  onEnd: (event: any) => this.handleDragEnd(event, 'new')
};
TodoTasksOptions: any = {
  animation: 150,
  group: 'shared',
  // Your sortable options
  onEnd: (event: any) => this.handleDragEnd(event, 'todo')
};
InProgressTasksOptions: any = {
  animation: 150,
  group: 'shared',
  // Your sortable options
  onEnd: (event: any) => this.handleDragEnd(event, 'inProgress')
};
InReviewTasksOptions: any = {
  animation: 150,
  group: 'shared',
  // Your sortable options
  onEnd: (event: any) => this.handleDragEnd(event, 'inReview')
};
CompletedTasksOptions: any = {
  animation: 150,
  group: 'shared',
  // Your sortable options
  onEnd: (event: any) => this.handleDragEnd(event, 'completed')
};

isHidden:any = {
  new: false,
  todo: false,
  inprogress: false,
  inreview: false,
  completed:false
};



Project=[
  {label:"Sort By",value:1},
  {label:"Newest",value:2},
  {label:"Date Added",value:3},
  {label:"Type",value:4},
  {label:"A - Z",value:5},

]
Assigned=[
  {label:"Angelina May",value:1},
  {label:"Sarah Ruth",value:2},
  {label:"Hercules Jhon",value:3},
  {label:"Mayor Kim",value:4},
]
Tags=[
  {label:"Admin",value:2},
  {label:"Authentication",value:3},
  {label:"Designing",value:4},
  {label:"Development",value:5},
  {label:"Marketing",value:6},
  {label:"Product",value:7},
  {label:"UI/UX",value:8},
]

KanbanCards = [
    {
      createdDate: "28 May",
      daysLeft: "2 days left",
      tags: ["#SPK - 11", "UI/UX"],
      title: "New Dashboard design.",
      Content:true,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit, Nulla soluta consectetur sit amet elit dolor sit amet.",
      comments: "02",
      likes: "12",
      avatars: [
        "./assets/images/faces/11.jpg",
        "./assets/images/faces/12.jpg",
        "./assets/images/faces/7.jpg",
        "./assets/images/faces/8.jpg"
      ]
    },
    {
      createdDate: "30 May",
      daysLeft: "2 days left",
      tags: ["#SPK - 05", "Marketing", "Finance"],
      title: "Marketing next projects.",
      Content:true,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta",
      comments: "08",
      likes: "40",
      avatars: [
        "./assets/images/faces/13.jpg",
        "./assets/images/faces/6.jpg"
      ]
    },
    {
      createdDate: "02 Jun",
      daysLeft: "1 days left",
      tags: ["#SPK - 08", "Designing"],
      title: "Design multi usage landing.",
      imgSrc: true,
      comments: "28",
      likes: "16",
      avatars: [
        "./assets/images/faces/2.jpg",
        "./assets/images/faces/8.jpg",
        "./assets/images/faces/5.jpg",
        "./assets/images/faces/10.jpg"
      ],
      src: "./assets/images/media/media-36.jpg"
    }
];
kanbanCardswarning = [
  {
    createdDate: "01 Jun",
    daysLeft: "10 days left",
    tags: ["#SPK - 07", "Admin", "Authentication"],
    title: "Adding Authentication Pages.",
    Content:true,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta",
    comments: "02",
    likes: "06",
    avatars: [
      "./assets/images/faces/9.jpg",
      "./assets/images/faces/8.jpg",
      "./assets/images/faces/14.jpg"
    ]
  },
  {
    createdDate: "05 Jun",
    daysLeft: "14 days left",
    tags: ["#SPK - 15", "Planning"],
    title: "New Project Discussion.",
    imgSrc:true,
    src: "./assets/images/media/media-41.jpg",
    description: "",
    comments: "06",
    likes: "17",
    avatars: [
      "./assets/images/faces/2.jpg",
      "./assets/images/faces/8.jpg",
      "./assets/images/faces/5.jpg",
      "./assets/images/faces/10.jpg"
    ]
  }
];
kanbanCardsinfo = [
  {
    createdDate: "02 Jun",
    daysLeft: "5 days left",
    tags: ["#SPK - 13", "UI Design", "Development"],
    title: "Create Calendar & Mail pages.",
    Content:true,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta",
    comments: "13",
    likes: "05",
    avatars: [
      "./assets/images/faces/13.jpg",
      "./assets/images/faces/6.jpg"
    ]
  },
  {
    createdDate: "03 Jun",
    daysLeft: "12 days left",
    Content:true,
    tags: ["#SPK - 09", "Product"],
    title: "Project design Figma,Sketch.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta",
    comments: "0",
    likes: "02",
    avatars: [
      "./assets/images/faces/12.jpg"
    ]
  },
  {
    createdDate: "07 Jun",
    daysLeft: "Done",
    imgSrc:true,
    tags: ["#SPK - 09", "Product"],
    title: "Project discussion with client",
    description: "",
    comments: "05",
    likes: "11",
    src:'./assets/images/media/media-69.jpg',
    avatars: [
      "./assets/images/faces/4.jpg"
    ]
  }
];
kanbanCardsdanger = [
  {
    id: 'SPK-15',
    createdDate: '05 Jun',
    daysLeft: "14 days left",
    imgSrc:true,
    tags: ['#SPK - 15', 'Review'],
    title: 'Design Architecture strategy.',
    src: './assets/images/media/media-43.jpg',
    likes: "9",
    comments: "35",
    avatars: [
      './assets/images/faces/3.jpg',
      './assets/images/faces/5.jpg',
      './assets/images/faces/7.jpg',
    ],
  },
];
kanbanCardsuccess = [
  {
    id: '#SPK - 04',
    createdDate: '12 Jun',
     daysLeft: 'Done',
    Content:true,
    tags: ['#SPK - 04', 'UI/UX'],
    title: 'Sash project update.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta',
    likes: "18",
    comments: "3",
    avatars: ['./assets/images/faces/6.jpg', './assets/images/faces/13.jpg']
  },
  {
    id: '#SPK - 10',
    createdDate: '10 Jun',
     daysLeft: 'Done',
    tags: ['#SPK - 10', 'Development'],
    title: 'React JS new version update.',
    Content:true,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta',
    likes: "22",
    comments: "12",
    avatars: ['./assets/images/faces/10.jpg', './assets/images/faces/11.jpg', './assets/images/faces/1.jpg']
  },
  {
    id: '#SPK - 16',
    createdDate: '07 Jun',
     daysLeft: 'Done',
    tags: ['#SPK - 16', 'Discussion'],
    title: 'Project discussion with client.',
    imgSrc:true,
    src: './assets/images/media/media-69.jpg',
    likes: "11",
    comments: "5",
    avatars: ['./assets/images/faces/4.jpg']
  }
];

  // Unified handler for all columns
  handleDragEnd(event: any, columnType: string): void {
    // Let SortableJS update the arrays first
    setTimeout(() => {
      this.updateColumnVisibility(columnType);
      this.cdr.detectChanges(); // Force update the view
    });
  }
  private updateColumnVisibility(columnType: string): void {
    let itemsArray: any[];
    let containerId: string;

    switch (columnType) {
      case 'new':
        itemsArray = this.KanbanCards;
        containerId = 'new-tasks-draggable';
        break;
      case 'todo':
        itemsArray = this.kanbanCardswarning;
        containerId = 'todo-tasks-draggable';
        break;
      case 'inProgress':
        itemsArray = this.kanbanCardsinfo;
        containerId = 'inprogress-tasks-draggable';
        break;
      case 'inReview':
        itemsArray = this.kanbanCardsdanger;
        containerId = 'inreview-tasks-draggable';
        break;
      case 'completed':
        itemsArray = this.kanbanCardsuccess;
        containerId = 'completed-tasks-draggable';
        break;
      default:
        return;
    }
  }
}
