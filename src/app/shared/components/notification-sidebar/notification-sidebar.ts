import { Component, ElementRef, inject, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { SidebarRightService } from '../../services/sidebar-right.service';
import { Subscription } from 'rxjs';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-notification-sidebar',
    templateUrl: './notification-sidebar.html',
    styleUrls: ['./notification-sidebar.scss'],
    standalone: false,

})
export class NotificationSidebar implements OnInit {
activeOffcanvas = inject(NgbActiveOffcanvas);
  layoutSub:Subscription
  isOpen: boolean | any
  @ViewChild('sidebar', {static: true}) sidebar: ElementRef | any;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private sidebarRightService: SidebarRightService
  ) {
    this.layoutSub = sidebarRightService.SidebarNotifyChangeEmitted.subscribe(
      value => {
        // this.isOpen = document.querySelector('.sidebar')
        // this.isOpen.classList.value.includes('sidebar-open')
        if (this.isOpen) {
          this.renderer.removeClass(this.sidebar.nativeElement, 'sidebar-open');
          this.isOpen = false;
        }
        else {
          this.renderer.addClass(this.sidebar.nativeElement, 'sidebar-open');
          this.isOpen = true;
        }
      }
    );
  }

  Status = [
    { id: "Online", label: 'Online' },
    { id: "Offline", label: 'Offline' },
  ]
  Website = [
    { id: "Spruko.com", label: 'Spruko.com' },
    { id: "sprukosoft.com", label: 'sprukosoft.com' },
    { id: "sprukotechnologies.com", label: 'sprukotechnologies.com' },
    { id: "sprukoinfo.com", label: 'sprukoinfo.com' },
    { id: "sprukotech.com", label: 'sprukotech.com' },
  ]


  ngOnInit(): void {
  }

  ngOnDestroy(){
    if (this.layoutSub) {
      this.layoutSub.unsubscribe();
    }
  }

  onClose(){
    this.renderer.removeClass(this.sidebar.nativeElement, 'sidebar-open');
    this.isOpen = false;
  }
  // ngAfterViewInit(){
  //   const sidebar = document.querySelector('.sidebar-right');
  //   // let ps = new PerfectScrollbar(sidebar, {wheelPropagation: false});


  // }


}
