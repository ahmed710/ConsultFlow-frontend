import { style } from '@angular/animations';
import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, HostListener, inject, Renderer2, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerDirective } from 'ngx-color-picker';
import { SpkBasicpricecard } from '../../../@spk/reusable-pages/spk-basicpricecard/spk-basicpricecard';
import { SpkTeamCard } from '../../../@spk/reusable-pages/spk-team-card/spk-team-card';
import { NgbAccordion } from '../../../@spk/spk-reusable-plugins/ngb-accordion/ngb-accordion';
import { AppStateService } from '../../../shared/services/app-state.service';

interface Feature {
  title: string;
  description: string;
  bgClass: string;
  svgClass: string;
  svgIcon:string;
}
interface ServiceCard {
  title: string;
  description: string;
  icon: string;
  cardClass: string;
  iconBgClass: string;
  iconColorClass: string;
}
interface PricingCardProps {
  title: string;
  price: string;
  year: string;
  percent: string;
  features: string[];
  cardClass?: string;
  priceColor?: string;
  btnColor: string;
  badgeColor: string;
  titleColor?:string
}
interface CustomReview {
  title: string;
  description: string;
  name: string;
  role: string;
  imgSrc: string;
  cardClass: string;
}
interface WorkflowCard {
  title: string;
  description: string;
  icon: string;
  imgSrc?: string;
  iconClass: string;
}
interface TeamMember {
  id:number;
  imgSrc: string;
  name: string;
  role: string;
}

@Component({
  selector: 'app-landing',
  imports: [RouterModule,CommonModule,NgbModule,ColorPickerDirective,SpkBasicpricecard,SpkTeamCard,NgbAccordion],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export class Landing {
  localdata:any=localStorage;


  constructor(private elementRef: ElementRef, private appStateService: AppStateService,private viewScroller: ViewportScroller,private el: ElementRef,public renderer: Renderer2,private sanitizer: DomSanitizer){
    document.body.classList.add('landing-body');
    const html: any =
    this.elementRef.nativeElement.ownerDocument.documentElement;
  html.style = '';
    const htmlElement =
    this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, 'data-toggled', 'close');
  this.renderer.setAttribute(htmlElement, 'data-nav-layout', 'horizontal');
  this.renderer.setAttribute(htmlElement, 'data-nav-style', 'menu-hover');
  this.renderer.setAttribute(htmlElement, 'data-menu-position', 'fixed');
  this.renderer.removeAttribute(htmlElement, 'data-header-styles');
  this.renderer.removeAttribute(htmlElement, 'data-menu-styles');
  this.renderer.removeAttribute(htmlElement, 'data-vertical-style');
  this.renderer.removeAttribute(htmlElement, 'loader');
  this.renderer.removeAttribute(htmlElement, 'data-width');
  this.renderer.removeAttribute(htmlElement, 'body-bg-rgb',);
  this.renderer.removeAttribute(htmlElement, 'body-bg-rgb2');
  this.renderer.removeAttribute(htmlElement, 'light-rgb');
  this.renderer.removeAttribute(htmlElement, 'body-bg-rgb',);

  }
  ngOnDestroy(): void {
    document.body.classList.remove('landing-body');
    this.appStateService.updateState();
  }
  toggleSidebar() {
    const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    const currentToggleValue = htmlElement.getAttribute('data-toggled');

    if (currentToggleValue !== 'open') {
      this.renderer.setAttribute(htmlElement, 'data-toggled', 'open');
    } else {
      this.renderer.setAttribute(htmlElement, 'data-toggled', 'close');
    }
  }
  isDataToggled = false;
  scrolled: boolean = false;
  expande = false;
  expande1 = false;
  expande2 = false;
  bodyclick() {
    this.expande1 = false;
    this.expande2 = false;
    this.expande = false;
    const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, 'data-toggled', 'close');
  }

    getSanitizedSVG(iconSvg: string): SafeHtml {
      return this.sanitizer.bypassSecurityTrustHtml(iconSvg);
    }
//
private offcanvasService = inject(NgbOffcanvas);
openSwitcher(content:any) {
  this.offcanvasService.open(content, { position: 'end' });
}
themeChange(type: string, type1: string) {
  const htmlElement =
    this.elementRef.nativeElement.ownerDocument.documentElement;
  this.renderer.setAttribute(htmlElement, 'data-header-styles', type1);
  localStorage.setItem('vyzorHeader', type1);
  this.renderer.setAttribute(htmlElement, 'data-menu-styles', type1);
  localStorage.setItem('vyzorMenu', type1);
  this.renderer.setAttribute(htmlElement, 'data-theme-mode', type1);
  localStorage.setItem('vyzordarktheme', type1);
}
  //  Directions
  DirectionsChange(type: string) {
    const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, 'dir', type);
    localStorage.setItem('dir', type);
  }

  //Theme Primary
  primary(type: string) {
    this.elementRef.nativeElement.ownerDocument.documentElement?.style.setProperty(
      '--primary-rgb',
      type
    );
    localStorage.setItem('vyzor-primary-mode', type);
    localStorage.removeItem('vyzorlight-primary-color');
  }
body!: HTMLBodyElement | null;

color1 = '#845adf';
public dynamicLightPrimary(data: any): void {
  this.color1 = data.color;

  const dynamicPrimaryLight = document.querySelectorAll(
    'button.pcr-button'
  );

  this.dynamicLightPrimaryColor(dynamicPrimaryLight, this.color1);

  localStorage.setItem('vyzor-primary-mode', this.hexToRgba(this.color1) || '');
  localStorage.setItem('vyzorlight-mode', 'true');
  this.body?.classList.remove('transparent-mode');

  // Adding
  this.body?.classList.add('light-mode');

  // Removing
  this.body?.classList.remove('dark');
  this.body?.classList.remove('bg-img1');

}
handleThemeUpdate(cssVars: any) {
  const root: any = document.querySelector(':root');
  const keys = Object.keys(cssVars);

  keys.forEach((key) => {
    root.style.setProperty(key, cssVars[key]);
  });
}
// to check the value is hexa or not
 isValidHex = (hexValue: any) =>
  /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hexValue);

 getChunksFromString = (st: any, chunkSize: any) =>
  st.match(new RegExp(`.{${chunkSize}}`, 'g'));
// convert hex value to 256
 convertHexUnitTo256 = (hexStr: any) =>
  parseInt(hexStr.repeat(2 / hexStr.length), 16);
hexToRgba(hexValue: any) {
  if (!this.isValidHex(hexValue)) {
    return null;
  }
  const chunkSize = Math.floor((hexValue.length - 1) / 3);
  const hexArr = this.getChunksFromString(hexValue.slice(1), chunkSize);
  const [r, g, b, a] = hexArr.map(this.convertHexUnitTo256);
  return `${r}, ${g} ,${b}`;
}
//primary theme color
dynamicLightPrimaryColor(primaryColor: any, color: any) {
primaryColor.forEach((item: any) => {
  const cssPropName1 = `--primary-rgb`;

  this.handleThemeUpdate({
    [cssPropName1]: this.hexToRgba(color),
  });
});
}
  //reset switcher

  reset() {
    localStorage.clear();
    const html: any =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    const body: any = document.querySelector('body');
    html.style = '';
    html.setAttribute('dir', 'ltr');
    html.setAttribute('data-header-styles', 'light');
    html.setAttribute('data-nav-layout', 'horizontal');
    html.setAttribute('data-menu-position', 'fixed');
    html.setAttribute('data-theme-mode', 'light');
    html.removeAttribute('data-menu-styles');

    const lightclickchecked = document.getElementById(
      'switcher-light-theme'
    ) as HTMLInputElement;
    if (lightclickchecked) {
      lightclickchecked.checked = true;
    }
    const ltrclickchecked = document.getElementById(
      'switcher-ltr'
    ) as HTMLInputElement;
    if (ltrclickchecked) {
      ltrclickchecked.checked = true;
    }
  }
  localStorageBackUp() {
    let html = document.querySelector('html');



    if (localStorage.getItem('dir') == 'rtl') {
      html?.setAttribute("dir", 'rtl');
    }
    if (localStorage.getItem('vyzordarktheme')) {
      const type: any = localStorage.getItem('vyzordarktheme');
      html?.setAttribute('data-theme-mode', type);

    }
    if (localStorage.getItem("vyzor-primary-mode")) {
      const type: any = localStorage.getItem("vyzor-primary-mode");
      html?.style.setProperty('--primary-rgb', type);
    }
  }
  ngOnInit(): void {
    this.localStorageBackUp();
  }
  public show: boolean = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;
    const sections = this.el.nativeElement.querySelectorAll('.side-menu__item');
    const scrollPos =
      window.scrollY ||
      this.elementRef.nativeElement.ownerDocument.documentElement.scrollTop ||
      document.body.scrollTop;
    sections.forEach((el: any, i: string | number) => {
      const currLink = sections[i];
      const val: any = currLink.getAttribute('value');
      const refElement: any = this.el.nativeElement.querySelector('#' + val);

      if (refElement !== null) {
        const scrollTopMinus = scrollPos + 73;
        if (
          refElement.offsetTop <= scrollTopMinus &&
          refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
        ) {
          const activeNav =
            this.el.nativeElement.querySelector('.nav-scroll.active');
          if (activeNav) {
            this.renderer.removeClass(activeNav, 'active');
          }
          this.renderer.addClass(currLink, 'active');
        } else {
          this.renderer.removeClass(currLink, 'active');
        }
      }
    });
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 100) {
      this.show = true;
    } else {
      this.show = false;
    }
  }

  isActive: boolean = false;

  toggleExpand(): void {
    this.expande = !this.expande;
    if (localStorage.getItem('data-menu-styles') == 'light') {
      document.querySelector('html')?.setAttribute('data-menu-styles', 'light');
    } else if (localStorage.getItem('data-menu-styles') == 'light') {
      document.querySelector('html')?.setAttribute('data-menu-styles', 'light');
    }
  }

scroll(el: HTMLElement) {
  el.scrollIntoView({ behavior: 'smooth' });
  this.isActive = true;
}
  //
  Swiperdata = [
    { imgsrc: './assets/images/company-logos/13.png' },
    { imgsrc: './assets/images/company-logos/14.png' },
    { imgsrc: './assets/images/company-logos/15.png' },
    { imgsrc: './assets/images/company-logos/16.png' },
    { imgsrc: './assets/images/company-logos/17.png' },
    { imgsrc: './assets/images/company-logos/18.png' },
    { imgsrc: './assets/images/company-logos/19.png' },
    { imgsrc: './assets/images/company-logos/20.png' },
    { imgsrc: './assets/images/company-logos/12.png' },
]
LandingFeatures: Feature[] = [
  {
    title: 'Dashboard Customization',
    description: 'Easily customize the layout and widgets of your dashboard for a personalized admin experience.',
    bgClass: 'bg-primary-transparent',
    svgClass: 'svg-primary',
    svgIcon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M104,208V104H32v96a8,8,0,0,0,8,8H96" opacity="0.2"></path><line x1="32" y1="104" x2="224" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="104" y1="104" x2="104" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><rect x="32" y="48" width="192" height="160" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect></svg>'
  },
  {
    title: 'Interactive Charts & Graphs',
    description: 'Display data dynamically with fully customizable, interactive charts and graphs.',
    bgClass: 'bg-secondary-transparent',
    svgClass: 'svg-secondary',
    svgIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M32,48H208a16,16,0,0,1,16,16V208a0,0,0,0,1,0,0H32a0,0,0,0,1,0,0V48A0,0,0,0,1,32,48Z" opacity="0.2"></path><polyline points="224 208 32 208 32 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><polyline points="224 96 160 152 96 104 32 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg>'
  },
  {
    title: 'User Interface Components',
    description: 'Access a wide range of pre-built UI components to quickly create a clean and consistent interface.',
    bgClass: 'bg-success-transparent',
    svgClass: 'svg-success',
    svgIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128,129.09,32.7,76.93a8,8,0,0,0-.7,3.25v95.64a8,8,0,0,0,4.16,7l88,48.18a8,8,0,0,0,3.84,1Z" opacity="0.2"></path><polyline points="32.7 76.92 128 129.08 223.3 76.92" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><line x1="128" y1="129.09" x2="128" y2="231.97" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M219.84,182.84l-88,48.18a8,8,0,0,1-7.68,0l-88-48.18a8,8,0,0,1-4.16-7V80.18a8,8,0,0,1,4.16-7l88-48.18a8,8,0,0,1,7.68,0l88,48.18a8,8,0,0,1,4.16,7v95.64A8,8,0,0,1,219.84,182.84Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><polyline points="81.56 48.31 176 100 176 152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg>'
  },
  {
    title: 'Responsive Design',
    description: 'Ensure your admin panel looks great on all devices with a fully responsive design.',
    bgClass: 'bg-warning-transparent',
    svgClass: 'svg-warning',
    svgIcon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><rect x="64" y="56" width="128" height="144" opacity="0.2"></rect><rect x="64" y="24" width="128" height="208" rx="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect><line x1="64" y1="56" x2="192" y2="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="64" y1="200" x2="192" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>'
  },
  {
    title: 'Table Management',
    description: 'Manage and display large datasets with advanced table components, filters, and pagination.',
    bgClass: 'bg-info-transparent',
    svgClass: 'svg-info',
    svgIcon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><rect x="32" y="104" width="56" height="96" opacity="0.2"></rect><path d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><line x1="32" y1="104" x2="224" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="32" y1="152" x2="224" y2="152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="88" y1="104" x2="88" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>'
  },
  {
    title: 'Forms and Validation',
    description: 'Create robust forms with validation features for collecting and processing user data.',
    bgClass: 'bg-danger-transparent',
    svgClass: 'svg-danger',
    svgIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M192,120,136,64l29.66-29.66a8,8,0,0,1,11.31,0L221.66,79a8,8,0,0,1,0,11.31Z" opacity="0.2"></path><path d="M92.69,216H48a8,8,0,0,1-8-8V163.31a8,8,0,0,1,2.34-5.65L165.66,34.34a8,8,0,0,1,11.31,0L221.66,79a8,8,0,0,1,0,11.31L98.34,213.66A8,8,0,0,1,92.69,216Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><line x1="136" y1="64" x2="192" y2="120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="164" y1="92" x2="68" y2="188" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="95.49" y1="215.49" x2="40.51" y2="160.51" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>'
  },
  {
    title: 'Dark Mode / Light Mode',
    description: 'Switch between dark and light modes to suit user preferences and improve readability.',
    bgClass: 'bg-teal-transparent',
    svgClass: 'svg-teal',
    svgIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M108.11,28.11A96.09,96.09,0,0,0,227.89,147.89,96,96,0,1,1,108.11,28.11Z" opacity="0.2"></path><path d="M108.11,28.11A96.09,96.09,0,0,0,227.89,147.89,96,96,0,1,1,108.11,28.11Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>'
  },
  {
    title: 'Notifications and Alerts',
    description: 'Set up real-time notifications and alerts to keep users informed of important events and updates.',
    bgClass: 'bg-orange-transparent',
    svgClass: 'svg-orange',
    svgIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M56,104a72,72,0,0,1,144,0c0,35.82,8.3,64.6,14.9,76A8,8,0,0,1,208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104Z" opacity="0.2"></path><path d="M96,192a32,32,0,0,0,64,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M56,104a72,72,0,0,1,144,0c0,35.82,8.3,64.6,14.9,76A8,8,0,0,1,208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>'
  },
  {
    title: 'Page Templates',
    description: 'Choose from a variety of pre-built page templates to save time on development.',
    bgClass: 'bg-purple-transparent',
    svgClass: 'svg-purple',
    svgIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polygon points="152 32 152 88 208 88 152 32" opacity="0.2"></polygon><path d="M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg>'
  },
];
ServiceCards: ServiceCard[] = [
  {
      title: "Customizable Dashboards",
      description: "Personalize your dashboard with customizable widgets & modules.",
      cardClass: "primary",
      iconBgClass: "bg-primary-transparent",
      iconColorClass: "svg-primary",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M104,208V104H32v96a8,8,0,0,0,8,8H96" opacity="0.2"></path><line x1="32" y1="104" x2="224" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="104" y1="104" x2="104" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><rect x="32" y="48" width="192" height="160" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect></svg>',
  },
  {
      title: "Real-Time Analytics",
      description: "Access real-time data to drive fast, informed decisions.",
      cardClass: "secondary",
      iconBgClass: "bg-secondary-transparent",
      iconColorClass: "svg-secondary",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M32,48H208a16,16,0,0,1,16,16V208a0,0,0,0,1,0,0H32a0,0,0,0,1,0,0V48A0,0,0,0,1,32,48Z" opacity="0.2"></path><polyline points="224 208 32 208 32 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><polyline points="224 96 160 152 96 104 32 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg>',
  },
  {
      title: "User Management",
      description: "Efficiently manage roles, permissions, and team access.",
      cardClass: "warning",
      iconBgClass: "bg-warning-transparent",
      iconColorClass: "svg-warning",
      icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="96" r="64" opacity="0.2"></circle><circle cx="128" cy="96" r="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><path d="M32,216c19.37-33.47,54.55-56,96-56s76.63,22.53,96,56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>',
  },
  {
      title: "Seamless Integration",
      description: "Integrate effortlessly with third-party tools and services.",
      cardClass: "success",
      iconBgClass: "bg-success-transparent",
      iconColorClass: "svg-success",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M212,132l-58.63,58.63a32,32,0,0,1-45.25,0L65.37,147.88a32,32,0,0,1,0-45.25L124,44Z" opacity="0.2"></path><line x1="144" y1="64" x2="184" y2="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="232" y1="72" x2="192" y2="112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="224" y1="144" x2="112" y2="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M212,132l-58.63,58.63a32,32,0,0,1-45.25,0L65.37,147.88a32,32,0,0,1,0-45.25L124,44" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><line x1="86.75" y1="169.25" x2="32" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>',
  },
];
BasicPricingdata: PricingCardProps[] = [
  {
    title: "Basic",
    price: "$15",
    year: "Month",
    percent: "25%",
    features: [
      "Access to core features",
      "5GB storage",
      "Basic customer support",
      "1 user access",
      "Email notifications",
    ],
    btnColor: "primary",
    badgeColor: "secondary",
    priceColor:'primary'
  },
  {
    title: "Pro",
    price: "$45",
    year: "Month",
    titleColor:"text-fixed-white",
    percent: "40%",
    features: [
      "All Basic Plan Features",
      "50GB storage",
      "Priority customer support",
      "5 user access",
      "Advanced analytics",
    ],
    cardClass: "card-bg-primary",
    priceColor: "fixed-white",
    btnColor: "light",
    badgeColor: "white",
},
  {
    title: "Enterprise",
    price: "$99",
    year: "Month",
    percent: "50%",
    features: [
      "All Pro Plan Features",
      "Unlimited storage",
      "Dedicated account manager",
      "20 user access",
      "Customizable workflows",
    ],
    btnColor: "primary",
    badgeColor: "secondary",
    priceColor:'primary'
  },
];
BasicPricing1data: PricingCardProps[] = [
  {
    title: "Basic",
    price: "$150",
    year: "Year",
    percent: "25%",
    features: [
      "Access to core features",
      "5GB storage",
      "Basic customer support",
      "1 user access",
      "Email notifications",
    ],
    btnColor: "primary",
    badgeColor: "secondary",
    priceColor:'primary'
  },
  {
    title: "Pro",
    price: "$450",
    year: "Year",
    titleColor:"text-fixed-white",
    percent: "40%",
    features: [
      "All Basic Plan Features",
      "50GB storage",
      "Priority customer support",
      "5 user access",
      "Advanced analytics",
    ],
    cardClass: "card-bg-primary",
    priceColor: "fixed-white",
    btnColor: "light",
    badgeColor: "white",
},
  {
    title: "Enterprise",
    price: "$990",
    year: "Year",
    percent: "50%",
    features: [
      "All Pro Plan Features",
      "Unlimited storage",
      "Dedicated account manager",
      "20 user access",
      "Customizable workflows",
    ],
    btnColor: "primary",
    badgeColor: "secondary",
    priceColor:'primary'
  },
];
Faqs1=[
  {
    title: '<div class="lh-1 me-2"><span class="avatar avatar-sm avatar-rounded bg-primary-transparent"><i class="ri-layout-4-line fw-medium fs-5 text-primary"></i></span></div> How do I customize my dashboard layout?',
    body: "You can easily customize the dashboard by dragging and dropping widgets. Go to the settings menu and select 'Customize Dashboard' to rearrange the layout.",
    headingId: 'headingcustomicon2Eleven',
    collapseId: 'collapsecustomicon2Eleven',
    collapsed: false,
   },
  {
     title: '<div class="lh-1 me-2"><span class="avatar avatar-sm avatar-rounded bg-primary-transparent"><i class="ri-plug-line fw-medium fs-5 text-primary"></i></span></div> Can I integrate third-party apps with the admin template?',
     body: 'Yes! Our admin template supports seamless integrations with third-party apps. You can easily connect tools like Google Analytics, CRM software, and more.',
     headingId: 'headingcustomicon2Twelve',
     collapseId: 'collapsecustomicon2Twelve',
     collapsed: true,
   },
  {
     title: '<div class="lh-1 me-2"><span class="avatar avatar-sm avatar-rounded bg-primary-transparent"><i class="ri-phone-line fw-medium fs-5 text-primary"></i></span></div> Is this admin template mobile responsive?',
     body: " Absolutely! The admin template is fully responsive and optimized for mobile, ensuring that it works perfectly on smartphones and tablets.",
     headingId: 'headingcustomicon2Thirteen',
     collapseId: 'collapsecustomicon2Thirteen' ,
     collapsed: true,
    },
    {
      title: '<div class="lh-1 me-2"><span class="avatar avatar-sm avatar-rounded bg-primary-transparent"><i class="ri-user-settings-line fw-medium fs-5 text-primary"></i></span></div> How do I manage user roles and permissions?',
      body: 'You can manage user roles and permissions under the "User Management" section. Simply assign roles like Admin, Manager, or Viewer to control access.',
      headingId: 'headingcustomicon2Fourteen',
      collapseId: 'collapsecustomicon2Fourteen' ,
      collapsed: true,
     },
     {
      title: '<div class="lh-1 me-2"><span class="avatar avatar-sm avatar-rounded bg-primary-transparent"><i class="ri-file-excel-line fw-medium fs-5 text-primary"></i></span></div> Can I export data from the reports section?',
      body: "Yes, you can easily export reports as CSV, PDF, or Excel files. Just click the export button at the top of the reports page.",
      headingId: 'headingcustomicon2Fifteen',
      collapseId: 'collapsecustomicon2Fifteen' ,
      collapsed: true,
     },
     {
      title: '<div class="lh-1 me-2"><span class="avatar avatar-sm avatar-rounded bg-primary-transparent"><i class="ri-notification-line fw-medium fs-5 text-primary"></i></span></div> How do I enable notifications for updates?',
      body: "Notifications can be enabled under the 'Settings' section. You can choose to receive real-time alerts via email or in-app for important updates.",
      headingId: 'headingcustomicon2Sixteen',
      collapseId: 'collapsecustomicon2Sixteen' ,
      collapsed: true,
     }
];
CustomReviews: CustomReview[] = [
  {
      title: "User Experience",
      description: "The customizable templates and clean, user-friendly interface make designing creative assets a breeze. It has boosted our team’s efficiency and allowed us to meet tight deadlines with ease.",
      name: "Clara Johnson",
      role: "Senior Graphic Designer",
      imgSrc: "./assets/images/faces/1.jpg",
      cardClass: "primary border-0",

  },
  {
      title: "Integration & Compatibility",
      description: "The integration features are excellent and have made a huge difference in streamlining our workflow. It fits perfectly with our existing tools and allows our teams to collaborate better.",
      name: "Peter Hayes",
      role: "Chief Technology Officer",
      imgSrc: "./assets/images/faces/10.jpg",
      cardClass: "success border-0",

  },
  {
      title: "Product Quality",
      description: "This product has revolutionized our marketing strategy by providing real-time analytics and a seamless experience. We’ve seen significant improvements in our customer engagement.",
      name: "John Thompson",
      role: "Marketing Director",
      imgSrc: "./assets/images/faces/9.jpg",
      cardClass: "warning border-0",

  },
  {
      title: "Efficiency",
      description: "The automation tools have saved us so much time, especially during critical project timelines. We've been able to reduce delays and improve our overall project delivery rates.",
      name: "Ashley Miller",
      role: "Project Manager",
      imgSrc: "./assets/images/faces/5.jpg",
      cardClass: "info border-0",

  },
  {
      title: "Customer Support",
      description: "Amazing customer support team—always available and ready to resolve issues. Their prompt responses and dedication to fixing problems have made our experience exceptional.",
      name: "Kevin Brown",
      role: "Customer Relations Manager",
      imgSrc: "./assets/images/faces/14.jpg",
      cardClass: "danger border-0",

  },
  {
      title: "Sales Performance",
      description: "The tools and analytics have significantly improved our sales process. I’m now able to track leads better, prioritize tasks, and close deals more efficiently. It’s truly a game-changer.",
      name: "Grace Lee",
      role: "Sales Executive",
      imgSrc: "./assets/images/faces/3.jpg",
      cardClass: "teal border-0",

  },
];
WorkflowCards: WorkflowCard[] = [
  {
      title: "Dashboard Setup",
      description: "Quickly configure your dashboard with widgets, charts, and modules to track essential metrics.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M104,208V104H32v96a8,8,0,0,0,8,8H96" opacity="0.2"></path><line x1="32" y1="104" x2="224" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="104" y1="104" x2="104" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><rect x="32" y="48" width="192" height="160" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect></svg>',
      imgSrc: "./assets/images/media/backgrounds/3.png",
      iconClass: "svg-primary text-primary",
  },
  {
      title: "User Management",
      description: "Easily manage user roles, permissions, and access levels to keep your team organized.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="84" cy="108" r="52" opacity="0.2"></circle><path d="M10.23,200a88,88,0,0,1,147.54,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M172,160a87.93,87.93,0,0,1,73.77,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><circle cx="84" cy="108" r="52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><path d="M152.69,59.7A52,52,0,1,1,172,160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>',
      imgSrc: "./assets/images/media/backgrounds/4.png",
      iconClass: "svg-warning text-warning",
  },
  {
      title: "Data Analytics",
      description: "Monitor real-time data and generate insightful reports to make informed business decisions.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M32,48H208a16,16,0,0,1,16,16V208a0,0,0,0,1,0,0H32a0,0,0,0,1,0,0V48A0,0,0,0,1,32,48Z" opacity="0.2"></path><polyline points="224 208 32 208 32 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><polyline points="224 96 160 152 96 104 32 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg>',
      iconClass: "svg-success text-success",
  },
];
TeamMembers: TeamMember[] = [
  {
    id:1,
    imgSrc: "./assets/images/faces/team/1.png",
    name: "John Smith",
    role: "Senior Developer",
  },
  {
    id:2,
    imgSrc: "./assets/images/faces/team/2.png",
    name: "Emily Johnson",
    role: "Product Manager",
  },
  {
    id:3,
    imgSrc: "./assets/images/faces/team/3.png",
    name: "Sarah Davis",
    role: "Marketing Specialist",
  },
  {
    id:4,
    imgSrc: "./assets/images/faces/team/4.png",
    name: "Michael Brown",
    role: "Lead Designer",
  },

];
eventTriggered: boolean = false;
screenWidth!: number;
@HostListener('window:resize', ['$event'])
onResize(event: any): void {
  this.menuResizeFn();
  this.screenWidth = window.innerWidth;

  // Check if the event hasn't been triggered and the screen width is less than or equal to your breakpoint
  if (!this.eventTriggered && this.screenWidth <= 992) {
    document.documentElement?.setAttribute('data-toggled', 'close')
    // Trigger your event or perform any action here
    this.eventTriggered = true; // Set the flag to true to prevent further triggering
  } else if (this.screenWidth > 992) {
    // Reset the flag when the screen width goes beyond the breakpoint
    this.eventTriggered = false;
  }
}

WindowPreSize: number[] = [window.innerWidth];
menuResizeFn(): void {
  this.WindowPreSize.push(window.innerWidth);

  if (this.WindowPreSize.length > 2) {
    this.WindowPreSize.shift();
  }
  if (this.WindowPreSize.length > 1) {
    const html = document.documentElement;

    if (this.WindowPreSize[this.WindowPreSize.length - 1] < 992 && this.WindowPreSize[this.WindowPreSize.length - 2] >= 992) {
      // less than 992
      html.setAttribute('data-toggled', 'close');
    }

    if (this.WindowPreSize[this.WindowPreSize.length - 1] >= 992 && this.WindowPreSize[this.WindowPreSize.length - 2] < 992) {
      // greater than 992
      html.removeAttribute('data-toggled');
      document.querySelector('#responsive-overlay')?.classList.remove('active');
    }
  }
}

taptotop(){
  let body:any = document.querySelector('body')
  body.style. scrollBehavior = 'smooth';
  this.viewScroller.scrollToPosition([0,0]);
}

@ViewChild('swiperContainer') swiperContainer!: ElementRef;
@ViewChild('swiperContainer1') swiperContainer1!: ElementRef;
ngAfterViewInit(): void {
  const swiperEl = this.swiperContainer.nativeElement;
  const swiperEl1 = this.swiperContainer1.nativeElement;

  Object.assign(swiperEl, {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1600: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1800: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });
  Object.assign(swiperEl1, {
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 5,
    },
    640: {
        slidesPerView: 1,
        spaceBetween: 5,
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 5,
    },
    1024: {
        slidesPerView: 2,
        spaceBetween: 20,
    }

    },
  });

}


}
