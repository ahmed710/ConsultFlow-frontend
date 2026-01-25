import { CommonModule } from '@angular/common';
import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, EventEmitter, Output, Renderer2, ViewChild, ViewEncapsulation, input } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

Swiper.use([Autoplay, Navigation, Pagination]);
register();

@Component({
  selector: 'app-swiper',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './swiper.html',
  styleUrl: './swiper.scss',
})
export class SwiperComponent implements AfterViewInit {

   imageData = input<any[]>([]);
   swiperClass = input<string>('');
   effect = input<string>('');
   spaceBetween = input<number>(10);
   slidesPerView = input<number>();
   direction = input<string>('');
   autoplayDelay = input<number>(2000);
   navigation = input<any>();
   pagination = input<any>();
   autoplayDisableOnInteraction = input<boolean>(false);
   breakpoints = input<any>({});

  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  ngOnInit(): void {
    if (this.swiperContainer?.nativeElement) {
      this.swiperContainer.nativeElement.swiper.destroy();
      this.swiperContainer.nativeElement.initialized = false;
      this.swiperContainer.nativeElement.initialize();
    }
  }

  ngAfterViewInit() {
    if (this.swiperContainer?.nativeElement) {
      const swiperEl = this.swiperContainer.nativeElement;

      // Convert string input values for navigation and pagination
      // const isnavigation = this.navigation !== false;
      // const isPaginationEnabled = this.pagination == false;

      Object.assign(swiperEl, {
        slidesPerView: this.slidesPerView(),
        spaceBetween: this.spaceBetween(),
        direction: this.direction(),
        pagination: this.pagination() ? { clickable: true } : false,
        navigation: this.navigation(),
        autoplay: {
          delay: this.autoplayDelay(),
          disableOnInteraction: this.autoplayDisableOnInteraction(),
        },
        effect: this.effect() || '',
        breakpoints: this.breakpoints(),

      });

      // swiperEl.initialize();
    }
  }
   dynamicAttributes = input<{
    [key: string]: any;
}>({});





}
