import {Injectable, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject, fromEvent, Subject} from 'rxjs';
import {takeUntil, debounceTime} from 'rxjs/operators';

//Menu Bar
export interface Menu {
  headTitle?: string,
  path?: string;
  title?: string;
  icon?: string;
  subIcon?: string;
  type?: string;
  badgeType?: string;
  badgeValue?: string;
  badgeClass?: string;
  active?: boolean;
  bookmark?: boolean;
  children?: Menu[];
  Menusub?: boolean;
  selected?: boolean;
  dirchange?: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class NavService implements OnDestroy {
  private unsubscriber: Subject<any> = new Subject();
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(window.innerWidth);

  public megaMenu: boolean = false;
  public megaMenuCollapse: boolean = window.innerWidth < 1199 ? true : false;
  public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;
  public fullScreen: boolean = false;

  constructor(private router: Router) {
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, 'resize').pipe(
      debounceTime(1000),
      takeUntil(this.unsubscriber)
    ).subscribe((evt: any) => {
      this.setScreenWidth(evt.target.innerWidth);
      if (evt.target.innerWidth < 991) {
        this.collapseSidebar = false;
        this.megaMenu = false;
      }
      if (evt.target.innerWidth < 1199) {
        this.megaMenuCollapse = true;
      }
    });
    if (window.innerWidth < 991) {
      this.router.events.subscribe(event => {
        this.collapseSidebar = false;
        this.megaMenu = false;
      });
    }
  }

  ngOnDestroy() {
    this.unsubscriber.next;
    this.unsubscriber.complete();
  }

  private setScreenWidth(width: number): void {
    this.screenWidth.next(width);
  }

  MENUITEMS: Menu[] = [
    //Title
    {headTitle: 'MAIN'},
    {
      title: 'Dashboards',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M133.66,34.34a8,8,0,0,0-11.32,0L40,116.69V216h64V152h48v64h64V116.69Z" opacity="0.2"></path><line x1="16" y1="216" x2="240" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><polyline points="152 216 152 152 104 152 104 216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><line x1="40" y1="116.69" x2="40" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="216" y1="216" x2="216" y2="116.69" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M24,132.69l98.34-98.35a8,8,0,0,1,11.32,0L232,132.69" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>`,
      dirchange: false,
      type: 'sub',
      active: false,
      children: [
        {
          title: 'Projects',
          dirchange: false,
          subIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="side-menu-doublemenu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M224,88V200.89a7.11,7.11,0,0,1-7.11,7.11H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6L128,80h88A8,8,0,0,1,224,88Z" opacity="0.2"></path><path d="M224,88V200.89a7.11,7.11,0,0,1-7.11,7.11H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6L128,80h88A8,8,0,0,1,224,88Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>`,
          type: 'sub',
          active: false,
          badgeClass: 'bg-info-transparent',
          badgeValue: '4',
          selected: false,
          children: [
            {
              title: 'Dashboard',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/dashboards/projects/dashboard',
            },
            {
              title: 'Projects List',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/dashboards/projects/projects-list',
            },
            {
              title: 'Project Overview',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/dashboards/projects/1bveLuROnuhf5Zg57VUX',
            },
            {
              title: 'Create Project',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/dashboards/projects/create-project',
            },
          ]
        },

        {
          title: 'HRM',
          dirchange: false,
          subIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="side-menu-doublemenu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M208,40H48a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V48A8,8,0,0,0,208,40ZM57.78,216A72,72,0,0,1,128,160a40,40,0,1,1,40-40,40,40,0,0,1-40,40,72,72,0,0,1,70.22,56Z" opacity="0.2"></path><circle cx="128" cy="120" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><rect x="40" y="40" width="176" height="176" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect><path d="M57.78,216a72,72,0,0,1,140.44,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>`,
          type: 'link',
          active: false,
          selected: false,
          path: '/dashboards/hrm',
        },
        {
          title: 'Jobs',
          dirchange: false,
          subIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="side-menu-doublemenu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,144a191.14,191.14,0,0,1-96-25.68h0V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V118.31A191.08,191.08,0,0,1,128,144Z" opacity="0.2"></path><line x1="112" y1="112" x2="144" y2="112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><rect x="32" y="64" width="192" height="144" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect><path d="M168,64V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M224,118.31A191.09,191.09,0,0,1,128,144a191.14,191.14,0,0,1-96-25.68" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>`,
          type: 'sub',
          badgeClass: 'bg-success-transparent',
          badgeValue: '8',
          active: false,
          selected: false,
          children: [
            {
              title: 'Search Candidate',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/dashboards/jobs/search-candidates',
            },
            {
              title: 'Candidate Details',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/dashboards/jobs/candidate-details/8ECiivteFrEXcJgibGbP',
            },
          ],
        },
      ],
    },
    //Title
    {headTitle: 'Web Apps'},
    {
      title: 'Applications',
      dirchange: false,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><rect x="48" y="48" width="64" height="64" rx="8" opacity="0.2"></rect><rect x="144" y="48" width="64" height="64" rx="8" opacity="0.2"></rect><rect x="48" y="144" width="64" height="64" rx="8" opacity="0.2"></rect><rect x="144" y="144" width="64" height="64" rx="8" opacity="0.2"></rect><rect x="144" y="144" width="64" height="64" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect><rect x="48" y="48" width="64" height="64" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect><rect x="144" y="48" width="64" height="64" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect><rect x="48" y="144" width="64" height="64" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect></svg>`,
      type: 'sub',
      active: false,
      children: [
        {
          path: '/applications/full-calendar',
          subIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="side-menu-doublemenu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M40,88H216V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8Z" opacity="0.2"></path><rect x="40" y="40" width="176" height="176" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect><line x1="176" y1="24" x2="176" y2="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="80" y1="24" x2="80" y2="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="40" y1="88" x2="216" y2="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><polyline points="88 128 104 120 104 184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><path d="M138.14,128a16,16,0,1,1,26.64,17.63L136,184h32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>`,
          title: 'Full Calendar', type: 'link'
        },
        {
          title: 'Task',
          dirchange: false,
          subIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="side-menu-doublemenu__icon" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M216,56v64H160V56ZM40,208a8,8,0,0,0,8,8H88a8,8,0,0,0,8-8V120H40Z" opacity="0.2"></path><path d="M216,48H40a8,8,0,0,0-8,8V208a16,16,0,0,0,16,16H88a16,16,0,0,0,16-16V160h48v16a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V56A8,8,0,0,0,216,48Zm-8,64H168V64h40ZM88,64v48H48V64Zm0,144H48V128H88Zm16-64V64h48v80Zm64,32V128h40v48Z"></path></svg>`,
          type: 'sub',
          active: false,
          selected: false,
          children: [
            {
              title: 'Kanban Board',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/applications/task/kanban-board',
            },
            {
              title: 'List View',
              dirchange: false,
              type: 'link',
              active: false,
              selected: false,
              path: '/applications/task/list-view',
            },
          ],
        },
        {
          title: 'To Do List',
          dirchange: false,
          subIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="side-menu-doublemenu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><rect x="128" y="64" width="88" height="128" opacity="0.2"></rect><line x1="128" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="128" y1="64" x2="216" y2="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="128" y1="192" x2="216" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><polyline points="40 64 56 80 88 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><polyline points="40 128 56 144 88 112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><polyline points="40 192 56 208 88 176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg>`,
          type: 'link',
          active: false,
          selected: false,
          path: '/applications/todo-list',
        },
      ]
    },

    //Forms &  Charts
    {
      headTitle: 'Maps & Icons',
    },
    {
      title: 'Maps', dirchange: false,
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="side-menu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32Zm16,112L80,176l32-64,64-32Z" opacity="0.2"></path><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><polygon points="176 80 112 112 80 176 144 144 176 80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polygon></svg>`,

      type: 'sub',
      active: false,
      children: [
        {
          path: '/maps/ia',
          subIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="side-menu-doublemenu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M63.81,192.19c-47.89-79.81,16-159.62,151.64-151.64C223.43,176.23,143.62,240.08,63.81,192.19Z" opacity="0.2"></path><path d="M63.81,192.19c-47.89-79.81,16-159.62,151.64-151.64C223.43,176.23,143.62,240.08,63.81,192.19Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><line x1="160" y1="96" x2="40" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>`,
          dirchange: false, selected: false, title: 'IA simulation', type: 'link'
        },
      {
                path: '/maps/ortools',
                subIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="side-menu-doublemenu__icon" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M63.81,192.19c-47.89-79.81,16-159.62,151.64-151.64C223.43,176.23,143.62,240.08,63.81,192.19Z" opacity="0.2"></path><path d="M63.81,192.19c-47.89-79.81,16-159.62,151.64-151.64C223.43,176.23,143.62,240.08,63.81,192.19Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><line x1="160" y1="96" x2="40" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>`,
                dirchange: false, selected: false, title: 'OrTools', type: 'link'
              },
      ]
    },
  ]

  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);

}
