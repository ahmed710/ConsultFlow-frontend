import { ColorPickerDirective } from 'ngx-color-picker';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { RouterModule, RouterOutlet, provideRouter } from '@angular/router';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ToastrModule } from 'ngx-toastr';
import { FlatpickrDefaults } from 'angularx-flatpickr';
import { provideHttpClient } from '@angular/common/http';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { GallerizeModule } from '@ngx-gallery/gallerize';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { provideQuillConfig, QuillModule } from 'ngx-quill';
import { GALLERY_CONFIG, GalleryConfig } from 'ng-gallery';
import { GalleryModule as ks89GalleryModule } from '@ks89/angular-modal-gallery';
import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideClientHydration(),
    RouterOutlet,
    RouterModule,
    BrowserModule,
    provideAnimations(),
    FlatpickrDefaults,
    provideQuillConfig({
      modules: {
        syntax: true,
        toolbar: [],
      },
    }),
    {
      provide: GALLERY_CONFIG,
      useValue: {
        autoHeight: true,
        imageSize: 'cover',
      } as GalleryConfig,
    },
    provideCharts(withDefaultRegisterables()),
    provideHttpClient(),
    importProvidersFrom(
      ColorPickerDirective,
      CalendarModule.forRoot({
        provide: DateAdapter,
        useFactory: adapterFactory,
      }),
      GalleryModule.withConfig({}),
      LightboxModule,
      ks89GalleryModule,
      QuillModule.forRoot(),
      GallerizeModule,
      ToastrModule.forRoot({
        timeOut: 15000,
        closeButton: true,
        progressBar: true,
      })
    ),
  ],
};
