import { Component, OnInit, AfterViewInit, HostListener, inject, ElementRef, Renderer2 } from '@angular/core';
import { filter, Subscription } from 'rxjs';
import { Menu, NavService } from '../../services/nav.service';
import { SidebarRightService } from '../../services/sidebar-right.service';
import { SwitcherService } from '../../services/switcher.service';
import { Switcher } from '../switcher/switcher';
import { NgbModal, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AppStateService } from '../../services/app-state.service';
import { NotificationSidebar } from '../notification-sidebar/notification-sidebar';
interface Item {
  id: number;
  name: string;
  type: string;
  title: string;
  // Add other properties as needed
}

@Component({
    selector: 'app-header',
    templateUrl: './header.html',
    styleUrls: ['./header.scss'],
    standalone: false
})
export class Header implements OnInit{
  cartItemCount: number = 5;
  notificationCount: number = 5;
  public isCollapsed = true;
  collapse: any;
  closeResult = '';
  themeType: string | undefined;

  selectedItem: string  | null ='selectedItem'
  isOpen: boolean = false;
  constructor(
    private appStateService: AppStateService,
    private sidebarRightservice: SidebarRightService,
    public navServices: NavService,
    private elementRef: ElementRef,
    public renderer: Renderer2,
    public modalService:NgbModal,
    private router: Router, private activatedRoute: ActivatedRoute
  ) {this.localStorageBackUp()}

  private offcanvasService = inject(NgbOffcanvas);
  private offcanvasService1 = inject(NgbOffcanvas);


  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  closeDropdown() {
    this.isOpen = false;
  }

  handleItemClick(title: string) {
    this.selectedItem = title;
    this.isOpen = false;
    localStorage.setItem('selectedItem', title);
  }
  open() {
    this.offcanvasService.open(Switcher, {
      position: 'end',
      scroll: true,
      panelClass:'switcher-canvas-width'
    });
  }
  toggleSidebarNotification() {
    this.offcanvasService1.open(NotificationSidebar, {
      position: 'end',
      scroll: true,
      panelClass:'header-notification-width'
    });
  }
    // Addding sticky-pin
    scrolled = false;

    @HostListener('window:scroll', [])
    onWindowScroll() {
      this.scrolled = window.scrollY > 10;
      const sections = document.querySelectorAll('.side-menu__item');
      const scrollPos =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      sections.forEach((ele, i) => {
        const currLink = sections[i];
        const val: any = currLink.getAttribute('value');
        const refElement: any = document.querySelector('#' + val);

        // Add a null check here before accessing properties of refElement
        if (refElement !== null) {
          const scrollTopMinus = scrollPos + 73;
          if (
            refElement.offsetTop <= scrollTopMinus &&
            refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
          ) {
            document.querySelector('.nav-scroll')?.classList.remove('active');
            currLink.classList.add('active');
          } else {
            currLink.classList.remove('active');
          }
        }
      });
    }
  openModal(content:any) {
    this.modalService.open(content);
  }
  openSearch(search: any) {
    // this.modalService.open(search);
  }
  toggleSidebar() {
    let html = document.querySelector("html")!;

    // Check the window width
    if (window.innerWidth <= 992) {
        let dataToggled = html.getAttribute("data-toggled");

        if (dataToggled == "open") {
            html.setAttribute("data-toggled", "close");
        } else {
            html.setAttribute("data-toggled", "open");
        }
    }
    else {
        let menuNavLayoutType = html.getAttribute("data-nav-style");
        let verticalStyleType = html.getAttribute("data-vertical-style");

        if (menuNavLayoutType) {
            let dataToggled = html.getAttribute("data-toggled");
            if (dataToggled) {
                html.removeAttribute("data-toggled");
            } else {
                html.setAttribute(
                    "data-toggled",
                    menuNavLayoutType + "-closed",
                );
            }
        } else if (verticalStyleType) {
            let dataToggled = html.getAttribute("data-toggled");

            if (verticalStyleType == "doublemenu") {
                if (
                    html.getAttribute("data-toggled") ===
                        "double-menu-open" &&
                    document.querySelector(".double-menu-active")
                ) {
                    html.setAttribute("data-toggled", "double-menu-close");
                } else {
                    if (document.querySelector(".double-menu-active")) {
                        html.setAttribute(
                            "data-toggled",
                            "double-menu-open",
                        );
                    }
                }
            } else if (dataToggled) {
                html.removeAttribute("data-toggled");
            } else {
                switch (verticalStyleType) {
                    case "closed":
                        html.setAttribute(
                            "data-toggled",
                            "close-menu-close",
                        );
                        break;
                    case "icontext":
                        html.setAttribute(
                            "data-toggled",
                            "icon-text-close",
                        );
                        break;
                    case "overlay":
                        html.setAttribute(
                            "data-toggled",
                            "icon-overlay-close",
                        );
                        break;
                    case "detached":
                        html.setAttribute("data-toggled", "detached-close");
                        break;
                    default:
                }
            }
        }
    }
}

  updateTheme(theme: string) {
    this.appStateService.updateState({ theme , menuColor:theme, headerColor: theme });
    if(theme=='light'){
      this.appStateService.updateState({ theme,themeBackground : '',headerColor:'transparent',menuColor:'transparent' });
      let html = document.querySelector('html');
        html?.style.removeProperty( '--body-bg-rgb');
        html?.style.removeProperty( '--body-bg-rgb2');
        html?.style.removeProperty( '--light-rgb');
        html?.style.removeProperty( '--form-control-bg');
        html?.style.removeProperty( '--input-border' );
        if (window.innerWidth <= 992) {
          html?.setAttribute('data-toggled', 'close');
        }
      }
    if(theme=='dark'){
      this.appStateService.updateState({ theme,themeBackground : '',headerColor:'transparent',menuColor:'transparent' });
      let html = document.querySelector('html');
        html?.style.removeProperty( '--body-bg-rgb');
        html?.style.removeProperty( '--body-bg-rgb2');
        html?.style.removeProperty( '--light-rgb');
        html?.style.removeProperty( '--form-control-bg');
        html?.style.removeProperty( '--input-border' );
        if (window.innerWidth <= 992) {
          html?.setAttribute('data-toggled', 'close');
        }
    }
  }


  localStorageBackUp() {
    let styleId = document.querySelector('#style');

    let html = document.querySelector('html');
    //Theme Color Mode:
    if (localStorage.getItem('vyzorHeader') == 'dark') {
      if (localStorage.getItem('vyzordarktheme')) {
        const type: any = localStorage.getItem('vyzordarktheme');
        html?.setAttribute('data-theme-mode', type);
        html?.setAttribute('data-header-styles', type);
        html?.setAttribute('data-menu-styles', type);
      }
      if (localStorage.getItem('vyzordarktheme') == 'light') {
        const type: any = localStorage.getItem('vyzordarktheme');
        html?.setAttribute('data-theme-mode', type);
        html?.setAttribute('data-header-styles', type);
        html?.setAttribute('data-menu-styles', 'transparent');
      }
    }
  }
  isCartEmpty: boolean = false;
  isNotifyEmpty: boolean = false;


  removeNotify(rowId: string) {
    const rowElement = document.getElementById(rowId);
    if (rowElement) {
      rowElement.remove();
    }
    this.notificationCount--;
    this.isNotifyEmpty = this.notificationCount === 0;
  }


  // Search
  public menuItems!: Menu[];
  public items!: Menu[];
  public text!: string;
  public SearchResultEmpty: boolean = false;

  ngOnInit(): void {
    const storedSelectedItem = localStorage.getItem('selectedItem');
    // this.updateSelectedItem();
  // If there's no selected item stored, set a default one
  if (!storedSelectedItem) {
    this.selectedItem = "Sales Dashboard"; // You can set any default item here
    localStorage.setItem('selectedItem', this.selectedItem);
  } else {
    this.selectedItem = storedSelectedItem;
  }
    this.navServices.items.subscribe((menuItems) => {
      this.items = menuItems;
    });
    // To clear and close the search field by clicking on body
    document.querySelector('.main-content')?.addEventListener('click', () => {
      this.clearSearch();
    });
    this.text = '';
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      this.updateSelectedItem();
    });

  }

  private updateSelectedItem() {
    const dashboard = this.activatedRoute.snapshot.firstChild?.url[0]?.path;
    this.selectedItem = dashboard ? dashboard.charAt(0).toUpperCase() + dashboard.slice(1) + ' Dashboard' : this.selectedItem;
  }
  ngOnDestroy(): void {
    const windowObject: any = window;
    let html = this.elementRef.nativeElement.ownerDocument.documentElement;

    window.addEventListener('resize', () => {
      if (localStorage.getItem('vyzorverticalstyles') != 'icon-text-close') {
        if (windowObject.innerWidth <= '991') {
          html?.setAttribute('data-toggled', 'open');
        } else {
          if (!(localStorage.getItem('vyzorverticalstyles') == 'doublemenu')) {
            html?.removeAttribute('data-toggled');
          }
        }
      } else {
        document
          .querySelector('html')
          ?.setAttribute('data-toggled', 'icon-text-close');
      }
    });


  }
  Search(searchText: string) {
    if (!searchText) return this.menuItems = [];
    // items array which stores the elements
    const items:Item[] = [];
    // Converting the text to lower case by using toLowerCase() and trim() used to remove the spaces from starting and ending
    searchText = searchText.toLowerCase().trim();
    this.items.filter((menuItems:Menu) => {
      // checking whether menuItems having title property, if there was no title property it will return
      if (!menuItems?.title) return false;
      //  checking wheteher menuitems type is text or string and checking the titles of menuitems
      if (menuItems.type === 'link' && menuItems.title.toLowerCase().includes(searchText)) {
        // Converting the menuitems title to lowercase and checking whether title is starting with same text of searchText
        if( menuItems.title.toLowerCase().startsWith(searchText)){ // If you want to get all the data with matching to letter entered remove this line(condition and leave items.push(menuItems))
          // If both are matching then the code is pushed to items array
          items.push(menuItems as Item);
        }
      }
      //  checking whether the menuItems having children property or not if there was no children the return
      if (!menuItems.children) return false;
      menuItems.children.filter((subItems:Menu) => {
        if (!subItems?.title) return false;
        if (subItems.type === 'link' && subItems.title.toLowerCase().includes(searchText)) {
          if( subItems.title.toLowerCase().startsWith(searchText)){         // If you want to get all the data with matching to letter entered remove this line(condition and leave items.push(subItems))
            items.push(subItems as Item);
          }

        }
        if (!subItems.children) return false;
        subItems.children.filter((subSubItems:Menu) => {
          if (subSubItems.title?.toLowerCase().includes(searchText)) {
            if( subSubItems.title.toLowerCase().startsWith(searchText)){ // If you want to get all the data with matching to letter entered remove this line(condition and leave items.push(subSubItems))
              items.push(subSubItems as Item);

            }
          }
        });
        return true;
      });
      return this.menuItems = items;
    });
    // Used to show the No search result found box if the length of the items is 0
    if(!items.length){
      this.SearchResultEmpty = true;
    }
    else{
      this.SearchResultEmpty = false;
    }
    return true;
  }
  SearchModal(SearchModal: any) {
    this.modalService.open(SearchModal);
  }

  //  Used to clear previous search result
  clearSearch() {
    const headerSearch = document.querySelector('.header-search');
    if (headerSearch) {
        headerSearch.classList.remove('searchdrop');
    }
    this.text = '';
    this.menuItems = [];
    this.SearchResultEmpty = false;
    return this.text, this.menuItems;

  }
  SearchHeader() {
    document
    .querySelector('.header-search')
    ?.classList.toggle('searchdrop');
  }
  isInputFocused: boolean = false;

  onInputFocus() {
    this.isInputFocused = true;
  }

  onInputBlur() {
    this.isInputFocused = false;
  }

  // toggleSidebarNotification() {
  //   this.sidebarRightservice.emitSidebarNotifyChange(true);
  // }
  isFullscreen: boolean = false;
  toggleFullscreen() {
    this.isFullscreen = !this.isFullscreen;
  }
  cartItems = [
    {
      id: "1",
      name: 'Urban Chic Satchel',
      image: './assets/images/ecommerce/png/13.png',
      quantity: 1,
      price: 120,
      OfferPrice:"25",
      originalPrice: 90,
      subname:"Sleek, stylish, and perfect for daily use"
    },
    {
      id: "2",
      name: 'TrailBlaze Runners',
      image: './assets/images/ecommerce/png/15.png',
      quantity: 1,
      price: 80,
      OfferPrice:"25",
      originalPrice: 60,
      subname:"Lightweight and built for comfort"
    },
    {
      id: "3",
      name: 'VisionTech SLR',
      image: './assets/images/ecommerce/png/19.png',
      quantity: 1,
      price: 500,
      OfferPrice:"25",
      originalPrice: 375,
      subname:"High-quality shots with every click"
    },
    {
      id: "4",
      name: 'FlexiSeat Office Chair',
      image: './assets/images/ecommerce/png/6.png',
      quantity: 5,
      price: 200,
      OfferPrice:"25",
      originalPrice: 150,
      subname:"Comfortable support for long hours"
    },

    {
      id: "5",
      name: 'DecoDial Classic',
      image: './assets/images/ecommerce/png/11.png',
      quantity: 2,
      price: 50,
      OfferPrice:"30",
      originalPrice: 35,
      subname:"A bold, colorful timepiece for any room"
    },

  ];
  handleCardClick(event: MouseEvent) {
    event.stopPropagation();
  }

  removeCart(id: string) {
    const rowElement = document.getElementById(id);
    if (rowElement) {
      rowElement.remove();
    }
    this.cartItemCount--;
    this.isCartEmpty = this.cartItemCount === 0;
  }

  updateQuantity(id: string, change: number) {
    const item = this.cartItems.find(item => item.id === id);
    if (item) {
      item.quantity = Math.max(1, item.quantity + change); // Prevent quantity from being less than 1
    }
  }

}
