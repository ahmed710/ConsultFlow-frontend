import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { NgbModal, NgbModalConfig, NgbModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { NgxEditorModule, Validators, Editor, Toolbar } from 'ngx-editor';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import jsonDoc from '../../../../shared/data/editor';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkNgSelect } from '../../../../@spk/spk-reusable-plugins/spk-ng-select/spk-ng-select';
import { SpkReusableTables } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables';
import { SpkDropdowns } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns';
@Component({
  selector: 'app-mail-app',
  imports: [SharedModule, NgbModule, CommonModule, SpkNgSelect,FormsModule, NgxEditorModule, OverlayscrollbarsModule, SpkReusableTables, SpkDropdowns],
  templateUrl: './mail-app.html',
  styleUrl: './mail-app.scss',
  providers: [NgbModalConfig, NgbModal],
})
export class MailApp {
  @ViewChild('totalMailsElement', { static: false }) totalMailsElement!: ElementRef
  @ViewChild('mailNavigation', { static: false }) mailNavigationElement!: ElementRef
  constructor(config: NgbModalConfig, private modalService: NgbModal,private offcanvasService:NgbOffcanvas,private renderer: Renderer2,private sanitizer: DomSanitizer) {

  }
  open(content: any) {
    this.modalService.open(content,{ size: 'lg' });
  }
  openOffcanvas(content1:any){
    this.offcanvasService.open(content1, { position: 'end' , scroll: true,panelClass:"mail-info-offcanvas" });

  }
  ngOnInit(): void {
    this.editor = new Editor();
    this.editor1 = new Editor();
  }
  editor!: Editor;
  editor1!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  form = new FormGroup({
    editorContent: new FormControl(
      { value: jsonDoc, disabled: false },
      Validators.required()
    ),
  });

  i: boolean = false;


  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.adjustLayout();
  }


  adjustLayout(): void {
    if (this.totalMailsElement && this.mailNavigationElement) {
      const totalMailsNativeElement = this.totalMailsElement.nativeElement;
      const mailNavigationNativeElement = this.mailNavigationElement.nativeElement;

      if (window.innerWidth > 991) {
        this.renderer.removeClass(totalMailsNativeElement, 'd-none');
      } else if (window.innerWidth < 1399 && !this.i) {
        this.renderer.addClass(totalMailsNativeElement, 'd-none');
      } else {
        this.renderer.removeClass(totalMailsNativeElement, 'd-none');
      }

      if (window.innerWidth > 991) {
        this.renderer.setStyle(mailNavigationNativeElement, 'display', 'block');
        this.renderer.setStyle(totalMailsNativeElement, 'display', 'block');
      } else {
        if (totalMailsNativeElement.style.display == 'block' && !this.i) {
          mailNavigationNativeElement.style.display = 'none';
        }

        if (window.innerWidth < 992) {
          this.renderer.setStyle(totalMailsNativeElement, 'display', 'none');
        }
      }

      this.onMailTypeClick();

      if (window.screen.width < 992) {
        this.renderer.setStyle(mailNavigationNativeElement, 'display', 'block');
        this.renderer.addClass(totalMailsNativeElement, 'd-none');
        this.i = true;
      }

      this.onTotalMailsCloseClick();

      if (window.screen.width <= 991) {
        this.renderer.setStyle(totalMailsNativeElement, 'display', 'block');
        this.renderer.removeClass(totalMailsNativeElement, 'd-none');
        this.renderer.setStyle(mailNavigationNativeElement, 'display', 'none');
        this.i = true;
      }
    }
  }

  onMailTypeClick(): void {
    if (window.innerWidth <= 991) {
      const totalMailsNativeElement = this.totalMailsElement.nativeElement;
      const mailNavigationNativeElement = this.mailNavigationElement.nativeElement;
      this.renderer.setStyle(totalMailsNativeElement, 'display', 'block');
      this.renderer.removeClass(totalMailsNativeElement, 'd-none');
      this.renderer.setStyle(mailNavigationNativeElement, 'display', 'none');
      this.i = true;
    }
  }

  onTotalMailsCloseClick(): void {
    if (window.innerWidth < 991) {
      const totalMailsNativeElement = this.totalMailsElement.nativeElement;
      const mailNavigationNativeElement = this.mailNavigationElement.nativeElement;
      this.renderer.setStyle(mailNavigationNativeElement, 'display', 'block');
      this.renderer.addClass(totalMailsNativeElement, 'd-none');
      this.i = true;
    }
  }
  Mails=[
    {label:"jay@gmail.com",value:1},
    {label:"kia@gmail.com",value:2},
    {label:"don@gmail.com",value:3},
    {label:"kimo@gmail.com",value:4},
  ]
  selectedTags=[1]
  getSanitizedSVG(svgContent: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgContent);
}
  mails = [
    { name: 'All Mails', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polygon points="224 56 128 144 32 56 224 56" opacity="0.2"/><path d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="224 56 128 144 32 56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>', badge: '5', },
    { name: 'Inbox', icon: ' <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M216,72V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V72Z" opacity="0.2"/><path d="M208,216H48a8,8,0,0,1-8-8V72L56,40H200l16,32V208A8,8,0,0,1,208,216Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="40" y1="72" x2="216" y2="72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="104" x2="128" y2="184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="96 152 128 184 160 152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>',   },
    { name: 'Sent', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M48.49,221.28A8,8,0,0,0,59.93,231l168-96.09a8,8,0,0,0,0-14l-168-95.85a8,8,0,0,0-11.44,9.67L80,128Z" opacity="0.2"></path><line x1="144" y1="128" x2="80" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M48.49,221.28A8,8,0,0,0,59.93,231l168-96.09a8,8,0,0,0,0-14l-168-95.85a8,8,0,0,0-11.44,9.67L80,128Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>' },
    { name: 'Drafts', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polygon points="152 32 152 88 208 88 152 32" opacity="0.2"></polygon><path d="M72,224H56a8,8,0,0,1-8-8V184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><polyline points="120 32 152 32 208 88 208 136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><path d="M48,64V40a8,8,0,0,1,8-8H80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><path d="M208,176v40a8,8,0,0,1-8,8h-8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><line x1="48" y1="104" x2="48" y2="144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="112" y1="224" x2="152" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>' },
    { name: 'Spam', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" opacity="0.2"></circle><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="16"></circle><line x1="128" y1="136" x2="128" y2="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><circle cx="128" cy="172" r="12"></circle></svg>',  },
    { name: 'Important', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M192,224l-64-40L64,224V48a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8Z" opacity="0.2"></path><path d="M192,224l-64-40L64,224V48a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>' },
    { name: 'Trash', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M26.18,184A16,16,0,0,0,40,208H216a16,16,0,0,0,13.84-24l-88-152a16,16,0,0,0-27.7,0Z" opacity="0.2"></path><polyline points="152 232 128 208 152 184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><polyline points="194.63 75.19 185.84 107.98 153.06 99.19" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><polyline points="78.96 140.77 70.16 108 37.39 116.77" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><path d="M70.16,108l-44,76A16,16,0,0,0,40,208H88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M128,208h88a16,16,0,0,0,13.84-24l-23.14-40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M185.84,108l-44-76a16,16,0,0,0-27.7,0L91,72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>' },
    { name: 'Archive', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M216,96v96a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96Z" opacity="0.2"></path><rect x="24" y="56" width="208" height="40" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect><path d="M216,96v96a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><line x1="104" y1="136" x2="152" y2="136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>' },
    { name: 'Starred', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,189.09l54.72,33.65a8.4,8.4,0,0,0,12.52-9.17l-14.88-62.79,48.7-42A8.46,8.46,0,0,0,224.27,94L160.36,88.8,135.74,29.2a8.36,8.36,0,0,0-15.48,0L95.64,88.8,31.73,94a8.46,8.46,0,0,0-4.79,14.83l48.7,42L60.76,213.57a8.4,8.4,0,0,0,12.52,9.17Z" opacity="0.2"></path><path d="M128,189.09l54.72,33.65a8.4,8.4,0,0,0,12.52-9.17l-14.88-62.79,48.7-42A8.46,8.46,0,0,0,224.27,94L160.36,88.8,135.74,29.2a8.36,8.36,0,0,0-15.48,0L95.64,88.8,31.73,94a8.46,8.46,0,0,0-4.79,14.83l48.7,42L60.76,213.57a8.4,8.4,0,0,0,12.52,9.17Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>' },
  ];
  labels = [
    { name: 'Mail', iconClass: 'text-primary' },
    { name: 'Home', iconClass: 'text-danger' },
    { name: 'Work', iconClass: 'text-success' },
    { name: 'Friends', iconClass: 'text-info' },
  ];

  handleToggleSelectAll(event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    this.allMailstable.forEach(mail => mail.checked = checked);
    this.allTasksChecked = checked;
  }
allMailstable=allMails

allTasksChecked!: boolean;

}
const allMails = [
  {
    id: "mail1",
    senderName: "Amelia Turner",
    senderAvatar: "./assets/images/faces/7.jpg",
    subject: "[Reminder] Client Meeting at 3 PM Today",
    content: "Hi John, just a quick reminder about our meeting with ABC Corp at 3 PM. Let me know if you need any changes. Regards, Sarah.",
    time: "10:15 AM",
    starred: true,
  },
  {
    id: "mail2",
    senderName: "Sarah Smith",
    senderAvatar: "./assets/images/faces/6.jpg",
    subject: "Invoice #45678 – Payment Due Soon",
    content: "Dear Sarah, your invoice for February services is attached. Kindly process the payment before the due date. Let me know if you have any questions. Best, Finance Team.",
    time: "09:45 AM",
    checked: true,

  },
  {
    id: "mail3",
    senderName: "David Johnson",
    senderAvatar: "./assets/images/faces/14.jpg",
    subject: "Project Alpha – Weekly Update & Next Steps",
    content: "Hi David, please find attached the latest updates on Project Alpha. Let’s connect tomorrow to discuss the next steps. Regards, James.",
    time: "01 Mar",
    starred: true,
    important: true,
    badge: [{ text: "Personal", className: "bg-primary" }],
  },
  {
    id: "mail4",
    senderName: "Emily Carter",
    senderAvatar: "./assets/images/faces/4.jpg",
    subject: "HR Policy Changes Effective Next Month",
    content: "Hello Emily, please review the attached HR policy changes regarding annual leaves and remote work. Let us know if you have any concerns. HR Department.",
    time: "01 Mar",
    starred: true,
  },
  {
    id: "mail5",
    senderName: "Mark Wilson",
    senderAvatar: "./assets/images/faces/13.jpg",
    subject: "Your Subscription is Expiring",
    content: "Hi Mark, your premium subscription is set to expire on March 5. Click here to renew and continue enjoying premium features.",
    time: "29 Feb",
    badge: [{ text: "Social", className: "bg-success" },],
  },
  {
    id: "mail6",
    senderName: "Olivia Brown",
    senderAvatar: "./assets/images/faces/3.jpg",
    subject: "Job Application for Marketing Analyst",
    content: "Dear Olivia, thank you for applying to our company. Your application is under review, and we will get back to you soon. Best regards, HR Team.",
    time: "29 Feb",
    starred: true,
    badge: [{ text: "Promotion", className: "bg-warning" },],
  },
  {
    id: "mail7",
    senderName: "Daniel Lee",
    senderAvatar: "./assets/images/faces/12.jpg",
    subject: "Top Industry News & Trends",
    content: "Hello Daniel, this week’s newsletter covers the latest trends in technology and business. Don’t miss out on our expert insights! Read more inside.",
    time: "29 Feb",
  },
  {
    id: "mail8",
    senderName: "Sophia Miller",
    senderAvatar: "./assets/images/faces/2.jpg",
    subject: "Unusual Login Attempt Detected",
    content: "Hi Sophia, we detected an unusual login attempt on your account from a new device. If this wasn’t you, please reset your password immediately.",
    time: "29 Feb",
    important: true,
  },
  {
    id: "mail9",
    senderName: "Michael Adams",
    senderAvatar: "./assets/images/faces/15.jpg",
    subject: "Your Order #98765 Has Been Shipped!",
    content: "Hi Michael, your order has been dispatched and is expected to arrive within 3-5 business days. Track your order using the link inside.",
    time: "29 Feb",
  },
  {
    id: "mail10",
    senderName: "Emma White",
    senderAvatar: "./assets/images/faces/5.jpg",
    subject: "Annual Tech Conference 2025",
    content: "Dear Emma, you’re invited to our exclusive Tech Conference 2025. Join industry leaders to discuss upcoming trends. Reserve your spot today!",
    time: "28 Feb",
    starred: true,
  }
];
