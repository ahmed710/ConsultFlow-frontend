import { Component } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { SortablejsModule } from '@maksim_m/ngx-sortablejs';
import { SharedModule } from '../../../../shared/shared.module';
import { SpkDropdowns } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns';
import { SpkFlatpickr } from '../../../../@spk/spk-reusable-plugins/spk-flatpickr/spk-flatpickr';
import { SpkDealsCard } from '../../../../@spk/reusable-dashboards/crm/spk-deals-card/spk-deals-card';
interface DealCard {
  id: number;
  label: string;
  badgeText: string;
  amount: string;
  amountStyle: string;
  labelclass: string;
}
interface Deal {
  id: number;
  imgSrc: string;
  title: string;
  price: string;
  company: string;
  date: string;
}
@Component({
  selector: 'app-deals',
  imports: [SharedModule, SpkDropdowns,SortablejsModule, SpkFlatpickr,SpkDealsCard],
  templateUrl: './deals.html',
  styleUrl: './deals.scss'
})
export class Deals {
  url1: string = ''; // Assuming url1 is a property in your component
  constructor(config: NgbModalConfig, private modalService: NgbModal,) {

  }
handleFileInput(event: any): void {

  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.url1 = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}
open(content: any) {
  this.modalService.open(content, { centered: true });
}
dealCards: DealCard[] = [
  {
    id: 1,
    label: 'Leads Discovered',
    badgeText: '24 Leads',
    amount: '$25,238',
    amountStyle: 'text-primary',
    labelclass:"lead-discovered"
  },
  {
    id: 2,
    label: 'Qualified Leads',
    badgeText: '17 Leads',
    amount: '$32,453',
    amountStyle: 'text-warning',
    labelclass:"lead-qualified"
  },
  {
    id: 3,
    label: 'Contact Initiated',
    badgeText: '5 Leads',
    amount: '$13,756',
    amountStyle: 'text-success',
    labelclass:"contact-initiated"
  },
  {
    id: 4,
    label: 'Needs Identified',
    badgeText: '43 Leads',
    amount: '$47,093',
    amountStyle: 'text-info',
    labelclass:"need-identified"
  },
  {
    id: 5,
    label: 'Negotiation',
    badgeText: '15 Leads',
    amount: '$26,146',
    amountStyle: 'text-danger',
    labelclass:"negotiation"
  },
  {
    id: 6,
    label: 'Deal Finalized',
    badgeText: '127 Deals',
    amount: '$1,74,679',
    amountStyle: 'text-secondary',
    labelclass:"deal-finalized"
  }
];
normalList1 = [];
normalList2 = [];
normalList3 = [];
normalList4 = [];
normalList5 = [];
normalList6 = [];
normalOptions: any = {
  animation: 150,
group: 'shared',
// Your sortable options
onEnd: (event: any) => this.handleDragEnd(event)
};
normalOptions1: any = {
animation: 150,
group: 'shared',
// Your sortable options
onEnd: (event: any) => this.handleDragEnd(event)
};
normalOptions2: any = {
animation: 150,
group: 'shared',
// Your sortable options
onEnd: (event: any) => this.handleDragEnd(event)
};
normalOptions3: any = {
animation: 150,
group: 'shared',
// Your sortable options
onEnd: (event: any) => this.handleDragEnd(event)
};
normalOptions4: any = {
animation: 150,
group: 'shared',
// Your sortable options
onEnd: (event: any) => this.handleDragEnd(event)
};
normalOptions5: any = {
animation: 150,
group: 'shared',
// Your sortable options
onEnd: (event: any) => this.handleDragEnd(event)
};
handleDragEnd(event: any): void {
  const container = document.getElementById('new-tasks-draggable');
  const cardElements = document.querySelectorAll('#new-tasks-draggable .card');
  if (container) {
    // Check if there are no child cards left
    if (container.children.length === 0) {
      container.classList.add('task-Null');
    } else {
      container.classList.remove('task-Null');
    }
  }
}
 PrimaryDeal: Deal[] = [
  {
    id: 1,
    imgSrc: "./assets/images/faces/12.jpg",
    title: "Service Upgrade",
    price: "$5000",
    company: "Spruko Technologies",
    date: "24, Jun 2024 - 12:45PM",
  },
  {
    id: 2,
    imgSrc: "./assets/images/faces/5.jpg",
    title: "Product Demo",
    price: "$50,000",
    company: "Acme Corporation LTD",
    date: "18, Apr 2024 - 11:22AM",
  },
  {
    id: 3,
    imgSrc: "./assets/images/faces/15.jpg",
    title: "Website Redesign",
    price: "$20,000",
    company: "Embark Technologies",
    date: "12, Jul 2024 - 10:15AM",
  },
  {
    id: 4,
    imgSrc: "./assets/images/faces/6.jpg",
    title: "Consulting Services",
    price: "$10,000",
    company: "Adam Johnson",
    date: "29, Jul 2024 - 4:45PM",
  },
];

 WarningDeal: Deal[] = [
  {
    id: 1,
    imgSrc: "./assets/images/faces/11.jpg",
    title: "Event Sponsorship",
    price: "$10,000",
    company: "Initech Info",
    date: "21, May 2024 - 10:25AM",
  },
  {
    id: 2,
    imgSrc: "./assets/images/faces/11.jpg",
    title: "Sales Training",
    price: "$6,000",
    company: "Soylent Corp",
    date: "10, May 2024 - 9:20AM",
  },
  {
    id: 3,
    imgSrc: "./assets/images/faces/14.jpg",
    title: "Content Creation",
    price: "$3,000",
    company: "Hooli Technologies",
    date: "25, Aug 2024 - 3:38PM",
  },
];

 SuccessDeal: Deal[] = [
  {
    id: 1,
    imgSrc: "./assets/images/faces/3.jpg",
    title: "E-commerce Integration",
    price: "$12,000",
    company: "Spice Infotech",
    date: "15, Sep 2024 - 8:32PM",
  },
  {
    id: 2,
    imgSrc: "./assets/images/faces/16.jpg",
    title: "Ad Campaign",
    price: "$5,500",
    company: "Umbrella Corp",
    date: "17, Jun 2024 - 10:54AM",
  },
];

 InfoDeal: Deal[] = [
  {
    id: 1,
    imgSrc: "./assets/images/faces/10.jpg",
    title: "Webinar Series",
    price: "$9,500",
    company: "Massive Dynamic",
    date: "16, May 2024 - 11:22AM",
  },
  {
    id: 2,
    imgSrc: "./assets/images/faces/13.jpg",
    title: "SEO Audit",
    price: "$3,000",
    company: "Logitech Ecostics",
    date: "27, Apr 2024 - 5:15PM",
  },
  {
    id: 3,
    imgSrc: "./assets/images/faces/8.jpg",
    title: "Loyalty Program",
    price: "$12,000",
    company: "Globex Corp",
    date: "26, Jul 2024 - 5:28AM",
  },
  {
    id: 4,
    imgSrc: "./assets/images/faces/9.jpg",
    title: "CRM Integration",
    price: "$10,000",
    company: "CrystalClear Consulting",
    date: "14, May 2024 - 11:29PM",
  },
];

 DangerDeals: Deal[] = [
  {
    id: 1,
    imgSrc: "./assets/images/faces/16.jpg",
    title: "Media Analytics",
    price: "$9,000",
    company: "GlobalConnect",
    date: "18, Mar 2024 - 2:32PM",
  },
  {
    id: 2,
    imgSrc: "./assets/images/faces/21.jpg",
    title: "Lead Nurturing Strategy",
    price: "$4,000",
    company: "AlphaTech Solutions",
    date: "16, Jul 2024 - 7:53AM",
  },
  {
    id: 3,
    imgSrc: "./assets/images/faces/2.jpg",
    title: "Newsletter Campaign",
    price: "$2,500",
    company: "CoreTech Solutions",
    date: "12, May 2024 - 10:22AM",
  },
  {
    id: 4,
    imgSrc: "./assets/images/faces/17.jpg",
    title: "Graphic Design",
    price: "$5,000",
    company: "TechPro Services",
    date: "10, Jul 2024 - 10:15PM",
  },
  {
    id: 5,
    imgSrc: "./assets/images/faces/18.jpg",
    title: "Website Maintenance",
    price: "$7,500",
    company: "RedRock Industries",
    date: "30, Jul 2024 - 6:30AM",
  },
];

 PinkDeals: Deal[] = [
  {
    id: 1,
    imgSrc: "./assets/images/faces/1.jpg",
    title: "CRM Training",
    price: "$4,200",
    company: "BlueSky Industries",
    date: "15, May 2024 - 8:20AM",
  },
  {
    id: 2,
    imgSrc: "./assets/images/faces/10.jpg",
    title: "Market Research",
    price: "$10,500",
    company: "BrightStar Solutions",
    date: "28, Jun 2024 - 9:27PM",
  },
];
}
