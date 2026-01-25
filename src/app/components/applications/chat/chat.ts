import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, inject, TemplateRef, ViewChild } from '@angular/core';
import { NgbModule, NgbNavModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';

import { PickerComponent } from '@ctrl/ngx-emoji-mart';
import { SharedModule } from '../../../shared/shared.module';
import { SpkDropdowns } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns';
import { SpkGallery } from '../../../@spk/spk-reusable-plugins/spk-gallery/spk-gallery';
import { FormsModule } from '@angular/forms';
interface Recent {
  message?: string;
  image?: string;
  images?:any[];
  bg?:string;
  name?: string;
  time?: string;
  unReadMsgCount?: string;
  unReadMsgStatus?: string;
  status?: string;
  chatMsgUnread: boolean;
  chatMsgTyping: boolean;
  number?:string;
  online?:string;
  bg1?:string
}
const data=[

  {
    srcUrl: "./assets/images/media/media-40.jpg",
    previewUrl: "./assets/images/media/media-40.jpg",
    colClass:'col-lg-4 col-md-4 col-sm-6 col-12'
  },
  {
    srcUrl: "./assets/images/media/media-41.jpg",
    previewUrl: "./assets/images/media/media-41.jpg",
    colClass:'col-lg-4 col-md-4 col-sm-6 col-12'
  },
  {
    srcUrl: "./assets/images/media/media-42.jpg",
    previewUrl: "./assets/images/media/media-42.jpg",
    colClass:'col-lg-4 col-md-4 col-sm-6 col-12'
  },
  {
    srcUrl: "./assets/images/media/media-43.jpg",
    previewUrl: "./assets/images/media/media-43.jpg",
    colClass:'col-lg-4 col-md-4 col-sm-6 col-12'
  },
  {
    srcUrl: './assets/images/media/media-44.jpg',
    previewUrl: './assets/images/media/media-44.jpg',
    colClass:'col-lg-4 col-md-4 col-sm-6 col-12'
  },
  {
    srcUrl: './assets/images/media/media-45.jpg',
    previewUrl: './assets/images/media/media-45.jpg',
    colClass:'col-lg-4 col-md-4 col-sm-6 col-12'
  },
  {
    srcUrl: './assets/images/media/media-46.jpg',
    previewUrl: './assets/images/media/media-46.jpg',
    colClass:'col-lg-4 col-md-4 col-sm-6 col-12'
  },
  {
    srcUrl: './assets/images/media/media-60.jpg',
    previewUrl: './assets/images/media/media-60.jpg',
    colClass:'col-lg-4 col-md-4 col-sm-6 col-12'
  },
  {
    srcUrl: './assets/images/media/media-61.jpg',
    previewUrl: './assets/images/media/media-61.jpg',
    colClass:'col-lg-4 col-md-4 col-sm-6 col-12'
  },

]

@Component({
  selector: 'app-chat',
  imports: [SharedModule, CommonModule,SpkDropdowns,PickerComponent, OverlayscrollbarsModule, NgbNavModule, NgbModule, SpkGallery,FormsModule],
  templateUrl: './chat.html',
  styleUrl: './chat.scss',
  providers: [NgbOffcanvas]
})
export class Chat {
  message: string = '';
  showEmojiPicker: boolean = false;
  imageData = data;
  private offcanvasService = inject(NgbOffcanvas);
  isOpen: boolean = false;
  @ViewChild('emojiPicker') emojiPicker!: ElementRef;
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.showEmojiPicker && this.emojiPicker && !this.emojiPicker.nativeElement.contains(event.target)) {
      this.showEmojiPicker = false;
    }
  }
  open(content: any) {
    this.offcanvasService.open(content, { position: 'end', scroll: true });
    this.isOpen = !this.isOpen;
  }

  handleClick(activeUser: any): void {
    this.activeUser = activeUser;
    if (window.innerWidth <= 992) {
      document.querySelector('.main-chart-wrapper ')?.classList.add('responsive-chat-open');
    }
  }
  removedetails() {
    document.querySelector('.main-chart-wrapper ')?.classList.remove('responsive-chat-open');
  }
  recents: Recent[] = [

    {
      name: 'John Doe',
      time: '10:30 AM',
      message: "Got your email 😊, I’ll send over the details by EOD! 😄",
      image: './assets/images/faces/15.jpg',
      unReadMsgCount: '',
      unReadMsgStatus: '',
      status: 'online',
      chatMsgUnread: false,
      chatMsgTyping: false,
    },
    {
      name: 'Alice Smith',
        time: '12:15 PM',
        message: 'Typing...',
        image: './assets/images/faces/2.jpg',
      unReadMsgCount: '1',
      unReadMsgStatus: 'bg-warning',
      status: 'online',
      chatMsgUnread: true,
      chatMsgTyping: true,
    },
    {
      name: 'Bob Johnson',
      time: '2:00 PM',
      message: 'Let’s schedule a call to discuss the project timeline.',
      image: './assets/images/faces/10.jpg',
      unReadMsgCount: '3',
      unReadMsgStatus: 'bg-primary',
      status: 'online',
      chatMsgUnread: false,
      chatMsgTyping: false,
    },
    {
      name: 'Emily Davis',
        time: '4:30 PM',
        message: 'The document is ready for final approval! 💳',
        image: './assets/images/faces/8.jpg',
      unReadMsgCount: '',
      unReadMsgStatus: '',
      status: 'online',
      chatMsgUnread: true,
      chatMsgTyping: false,
    },
  ];
  allchats: Recent[] = [
    {
      name: 'Michael Brown',
        time: '7:00 PM',
        message: 'I’ll finish the remaining tasks tomorrow.',
        image: './assets/images/faces/11.jpg',
      unReadMsgCount: '',
      unReadMsgStatus: '',
      status: 'offline',
      chatMsgUnread: false,
      chatMsgTyping: false,
    },
    {
      name: 'Sarah Lee',
        time: '10:45 AM',
        message: 'Can you share the meeting notes from yesterday?',
        image: './assets/images/faces/3.jpg',
      unReadMsgCount: '',
      unReadMsgStatus: '',
      status: 'offline',
      chatMsgUnread: false,
      chatMsgTyping: false,
    },
    {
      name: 'David Williams',
        time: '3:30 PM',
        message: 'I think we should revise the design before the next meeting.',
        image: './assets/images/faces/16.jpg',
      unReadMsgCount: '',
      unReadMsgStatus: '',
      status: 'offline',
      chatMsgUnread: false,
      chatMsgTyping: false,
    },
    {
      name: 'Olivia Wilson',
      time: '3 days ago',
      message: 'Just wanted to confirm the new meeting time.',
      image: './assets/images/faces/4.jpg',
      unReadMsgCount: '',
      unReadMsgStatus: '',
      status: 'offline',
      chatMsgUnread: false,
      chatMsgTyping: false,
    },
    {
      name: 'William Clark',
      time: '9:00 AM',
      message:
          'I’ve added the new features to the app. Let me know your thoughts.',
      image: './assets/images/faces/13.jpg',
      unReadMsgCount: '',
      unReadMsgStatus: '',
      status: 'offline',
      chatMsgUnread: false,
      chatMsgTyping: false,
    },
    {
      name: 'Sophia Lewis',
      time: '5 days ago',
      message:
          'I’m looking forward to seeing the final version of the presentation.',
      image: './assets/images/faces/5.jpg',
      unReadMsgCount: '',
      unReadMsgStatus: '',
      status: 'offline',
      chatMsgUnread: false,
      chatMsgTyping: false,
    },

  ];
  GroupChatPreviews = [
    {

        name: 'Family Chat 😍',
        time: '10:45 AM',
        sender: 'Lily Perez',
        message: 'How are you doing today? 😊',
        image: "./assets/images/faces/17.jpg",
        status: "online",
        chatMsgUnread: false,
    },
    {

        name: 'Home Team',
        time: '4:54 PM',
        sender: 'Paul Carter',
        message: 'Let me know if you need anything else.',
        image: "./assets/images/faces/18.jpg",
        status: "online",
        chatMsgUnread: true,

    },
    {

        name: 'Our Tribe 😎',
        time: '8:32 AM',
        message: 'Simon,Melissa,Amanda,Patrick,Siddique',
        image: "./assets/images/faces/19.jpg",
        status: "offline",
        chatMsgUnread: false,
    },
    {

        name: 'The Circle',
        time: 'Yesterday',
        message: 'Kamalan,Subha,Ambrose,Kiara,Jackson',
        image: "./assets/images/faces/20.jpg",
        status: "offline",
        chatMsgUnread: false,
    },
    {

        name: 'Family Bond',
        time: '2 Days ago',
        message: 'Subman,Rajen,Kairo,Dibasha,Alexa',
        image: "./assets/images/faces/21.jpg",
        status: "offline",
        chatMsgUnread: false,
    },
];

  activeUser = this.recents[1];


  //
  detailsclick1(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }
  addEmoji(event: any) {
    // For emoji-mart, the emoji is usually in event.emoji or event.native
    this.message += event.emoji?.native || event.native || '';
  }
}
