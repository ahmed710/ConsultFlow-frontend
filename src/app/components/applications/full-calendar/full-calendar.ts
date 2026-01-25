import  timeGrigPlugin  from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';;
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModal, NgbModalConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule } from 'angular-calendar';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { RouterModule } from '@angular/router';
import moment from 'moment';
import { SpkNgSelect } from '../../../@spk/spk-reusable-plugins/spk-ng-select/spk-ng-select';
import { SpkFlatpickr } from '../../../@spk/spk-reusable-plugins/spk-flatpickr/spk-flatpickr';
import { SharedModule } from '../../../shared/shared.module';

interface SchoolEvent {
  title: string;
  date: string;
  description: string;
  badgeColor: string;
};

@Component({
  selector: 'app-full-calendar',
  imports: [SharedModule, OverlayscrollbarsModule, CalendarModule, FormsModule, ReactiveFormsModule, NgbModule, FullCalendarModule, RouterModule, SpkNgSelect, SpkFlatpickr],
  templateUrl: './full-calendar.html',
  styleUrl: './full-calendar.scss'
})
export class FullCalendar {
  @ViewChild('fullCalendar') fullCalendar: any;
  @ViewChild('external', { static: false }) external!: ElementRef;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  curYear = moment().format('YYYY');
  curMonth = moment().format('MM');
  constructor(private cdr: ChangeDetectorRef,private modalService: NgbModal) { }
  calendarEvents: EventInput[] = [
    {
      id: '1',
      start: this.curYear + '-' + this.curMonth + '-02',
      end: this.curYear + '-' + this.curMonth + '-03',
      title: 'Annual School Day',
      className: "bg-secondary",
    },
    {
      id: '2',
      start: this.curYear + '-' + this.curMonth + '-17',
      end: this.curYear + '-' + this.curMonth + '-17',
      className: "bg-info",
      title: 'Science Fair',

    },
    {
      id: '3',
      start: this.curYear + '-' + this.curMonth + '-15',
      end: this.curYear + '-' + this.curMonth + '-15',
      title: 'Parent-Teacher Meeting',
      className: "bg-primary",

    },
    {
      id: '4',
      start: this.curYear + '-' + this.curMonth + '-13',
      end: this.curYear + '-' + this.curMonth + '-13',
      className: "bg-warning",
      title:'Spring Break'

    },
    {
      id: '5',
      start: this.curYear + '-' + this.curMonth + '-21',
      end: this.curYear + '-' + this.curMonth + '-21',
      title: 'Sports Day',
      className: "bg-success",

    },
    {
      id: '6',
      start: this.curYear + '-' + this.curMonth + '-08',
      end: this.curYear + '-' + this.curMonth + '-08',
      title: 'Attend Lea\'s Wedding',
      className: "bg-success",

    },
    {
      id: '7',
      start: this.curYear + '-' + this.curMonth + '-06',
      end: this.curYear + '-' + this.curMonth + '-06',
      title: 'Harcates Birthday',
      className: "bg-info",

    },
    {
      id: '8',
      start: this.curYear + '-' + this.curMonth + '-28',
      end: this.curYear + '-' + this.curMonth + '-28',
      title: 'Bunnysin\'s Birthday',
      className: "bg-info",
    },
    {
      id: '9',
      start: this.curYear + '-' + this.curMonth + '-03',
      end: this.curYear + '-' + this.curMonth + '-03',
      title: 'Lee shin\'s Birthday',
      className: "bg-info",
    },
    {
      id: '10',
      start: this.curYear + '-' + 11 + '-11',
      end: this.curYear + '-' + 11 + '-11',
      title: 'Shinchan\'s Birthday',
      className: "bg-info",
    },
  ];

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    events: this.calendarEvents,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay',
    },
    navLinks: true, // can click day/week names to navigate views
    businessHours: true, // display business hours
    editable: true,
    selectable: true,
    selectMirror: true,
    droppable: true,
    weekends: true,
    dayMaxEvents: true, // allow "more" link when too many events
    dateClick: (arg) => this.handleDateClick(arg),
    eventClick: (arg) => this.handleEventClick(arg),
    drop: () => this.handleDrop(),
  };
  handleDrop() {
    this.draggedEventData = null;
  }
  handleDateClick(arg: any) {
    const title = prompt('Event Title:');
    if (title) {
      // Create a new event
      const newEvent: EventInput = {
        id: `${this.calendarEvents.length + 1}`, // Generate a unique ID
        title: title,
        start: arg.date,
        allDay: arg.allDay,
        // className: 'bg-primary-transparent', // Optional: Add a default class
        className: this.draggedEventData?.className ,
      };

      // Update calendarEvents immutably to trigger change detection
      this.calendarEvents = [...this.calendarEvents, newEvent];

      // Notify FullCalendar to refetch events
      if (this.fullCalendar) {
        const calendarApi = this.fullCalendar.getApi();
        calendarApi.addEvent(newEvent); // Add the event directly to the calendar
        // Alternatively, you can use refetchEvents if events are managed externally
        // calendarApi.refetchEvents();
      }

      this.draggedEventData = null;
      // Trigger change detection
      this.cdr.detectChanges();
    }
  }
  handleEventClick(arg: any) {
    if (confirm('Are you sure you want to delete this event?')) {
      // Remove event from calendarEvents
      this.calendarEvents = this.calendarEvents.filter(
        (event) => event.id !== arg.event.id
      );

      // Remove event from FullCalendar
      if (this.fullCalendar) {
        arg.event.remove(); // Directly remove the event
        // Alternatively: this.fullCalendar.getApi().refetchEvents();
      }

      // Trigger change detection
      this.cdr.detectChanges();
    }
  }
  draggedEventData: EventInput | null = null;
  ngAfterViewInit(): void {
    const containerEl = this.external.nativeElement;


    new Draggable(containerEl, {
      itemSelector: '.fc-event',
      eventData: (eventEl: HTMLElement) => {
        const title = eventEl.innerText.trim();
        const className = eventEl.getAttribute('data-class') ;
        this.draggedEventData = {
          title,
          className: className + ' overflow-hidden',
        };
        return this.draggedEventData;
      },
    });
  }
  //@ViewChild('fullCalendar') fullCalendar: any;
  //@ViewChild('external', { static: false }) external!: ElementRef;
  //constructor(config: NgbModalConfig, private modalService: NgbModal,private cdr: ChangeDetectorRef) {

  //}

  //calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  //curYear = moment().format('YYYY');
  //curMonth = moment().format('MM');
  //calendarEvents: EventInput[] = [
  //  {
  //    id: '1',
  //    start: this.curYear + '-' + this.curMonth + '-02',
  //    end: this.curYear + '-' + this.curMonth + '-02',
  //    title: 'Spruko Meetup',
  //    className: 'bg-secondary-transparent',
  //  },
  // {
  //  id: '2',
  //  start: this.curYear + '-' + this.curMonth + '-17',
  //  end: this.curYear + '-' + this.curMonth + '-17',
  //  title: 'Design Review',
  //  className: "bg-info-transparent",

  //},
  // {
  //  id: '3',
  //  start: this.curYear + '-' + this.curMonth + '-13',
  //  end: this.curYear + '-' + this.curMonth + '-13',
  //  title: 'Lifestyle Conference',
  //  className: "bg-primary-transparent",

  //},
  //{
  //  id: '4',
  //  start: this.curYear + '-' + this.curMonth + '-21',
  //  end: this.curYear + '-' + this.curMonth + '-21',
  //  title: 'Team Weekly Brownbag',
  //  className: "bg-warning-transparent",

  //},
  // {
  //  id: '5',
  //  start: this.curYear + '-' + this.curMonth + '-04T10:00:00',
  //  end: this.curYear + '-' + this.curMonth + '-06T15:00:00',
  //  title: 'Music Festival',
  //  className: "bg-success-transparent",

  //},
  // {
  //  id: '6',
  //  start: this.curYear + '-' + this.curMonth + '-08',
  //  end: this.curYear + '-' + this.curMonth + '-08',
  //  title: 'Attend Lea\'s Wedding',
  //  className: "bg-success-transparent",

  //},
  //{
  //  id: '7',
  //  start: this.curYear + '-' + this.curMonth + '-06',
  //  end: this.curYear + '-' + this.curMonth + '-06',
  //  title: 'Harcates Birthday',
  //  className: "bg-info-transparent",

  //},
  //{
  //  id: '8',
  //  start: this.curYear + '-' + this.curMonth + '-28',
  //  end: this.curYear + '-' + this.curMonth + '-28',
  //  title: 'Bunnysin\'s Birthday',
  //  className: "bg-info-transparent",
  //},
  //{
  //  id: '9',
  //  start: this.curYear + '-' + this.curMonth + '-03',
  //  end: this.curYear + '-' + this.curMonth + '-03',
  //  title: 'Lee shin\'s Birthday',
  //  className: "bg-info-transparent",
  //},
  //{
  //  id: '10',
  //  start: this.curYear + '-' + 11 + '-11',
  //  end: this.curYear + '-' + 11 + '-11',
  //  title: 'Shinchan\'s Birthday',
  //  className: "bg-info-transparent",
  //},
  //];

  //calendarOptions: CalendarOptions = {
  //  plugins: [dayGridPlugin, interactionPlugin],
  //  initialView: 'dayGridMonth',
  //  events: this.calendarEvents,
  //  headerToolbar: {
  //    left: 'prev,next today',
  //    center: 'title',
  //    right: 'dayGridMonth,dayGridWeek,dayGridDay',
  //  },
  //  navLinks: true, // can click day/week names to navigate views
  //  businessHours: true, // display business hours
  //  editable: true,
  //  selectable: true,
  //  selectMirror: true,
  //  droppable: true,
  //  weekends: true,
  //  dayMaxEvents: true, // allow "more" link when too many events
  //  dateClick: (arg) => this.handleDateClick(arg),
  //  eventClick: (arg) => this.handleEventClick(arg),
  //  drop: () => this.handleDrop(),
  //};
  //handleDrop() {
  //  this.draggedEventData = null;
  //}
  //draggedEventData: EventInput | null = null;
  open(content: any) {
    this.modalService.open(content);
  }

  //handleDateClick(arg: any) {
  //  const title = prompt('Event Title:');
  //  if (title) {
  //    this.calendarEvents = this.calendarEvents.concat({
  //      title: title,
  //      start: arg.date,
  //      allDay: arg.allDay,
  //    });
  //  }
  //}
  //handleEventClick(arg: any) {
  //  if (confirm('Are you sure you want to delete this event?')) {
  //    // Remove event from calendarEvents
  //    this.calendarEvents = this.calendarEvents.filter(
  //      (event) => event.id !== arg.event.id
  //    );

  //    // Remove event from FullCalendar
  //    if (this.fullCalendar) {
  //      arg.event.remove(); // Directly remove the event
  //      // Alternatively: this.fullCalendar.getApi().refetchEvents();
  //    }

  //    // Trigger change detection
  //    this.cdr.detectChanges();
  //  }
  //}

  ////ngAfterViewInit(): void {
  ////  const containerEl = this.external.nativeElement;
  ////  new Draggable(containerEl, {
  ////    itemSelector: '.fc-event',
  ////    eventData: (eventEl: { innerText: string; className: string }) => {
  ////      return {
  ////        title: eventEl.innerText.trim(),
  ////        className: eventEl.className + ' overflow-hidden',
  ////      };
  ////    },
  ////  });
  ////}
  //ngAfterViewInit(): void {
  //  const containerEl = this.external.nativeElement;


  //  new Draggable(containerEl, {
  //    itemSelector: '.fc-event',
  //    eventData: (eventEl: HTMLElement) => {
  //      const title = eventEl.innerText.trim();
  //      const className = eventEl.getAttribute('data-class') ;
  //      this.draggedEventData = {
  //        title,
  //        className: className + ' overflow-hidden',
  //      };
  //      return this.draggedEventData;
  //    },
  //  });
  //}
  SchoolEvents: SchoolEvent[] = [
    {
        title: "Annual School Day",
        date: "02 Mar, 2025",
        description:
            "A celebration of the school year with various events and activities for students and staff.",
        badgeColor: "bg-primary",
    },
    {
        title: "Science Fair",
        date: "17 Mar, 2025",
        description:
            "Students will showcase their science projects. Open to all parents and students.",
        badgeColor: "bg-secondary",
    },
    {
        title: "Parent-Teacher Meeting",
        date: "15 Mar, 2025",
        description:
            "An important event where parents meet teachers to discuss the progress of their children.",
        badgeColor: "bg-warning",
    },
    {
        title: "Spring Break",
        date: "13 Mar,2025",
        description:
            "The students get a break for the spring holidays. No school during this period.",
        badgeColor: "bg-info",
    },
    {
        title: "Holiday Celebrations",
        date: "Due Date",
        description:
            "Celebrating the upcoming national holiday with various cultural activities and festivities.",
        badgeColor: "bg-success",
    },
];
EventSelect = [
  {value:'Primary', label:'Primary'},
  {value:'Secondary', label:'Secondary'},
  {value:'Success', label:'Success'},
  {value:'Info', label:'Info'},
  {value:'Warning', label:'Warning'},
  {value:'Danger', label:'Danger'},
  {value:'Teal', label:'Teal'}
]
}
