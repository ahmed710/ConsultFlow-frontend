import { Component, Input, input } from '@angular/core';
import { Gallery, GalleryModule, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox, LightboxModule } from 'ng-gallery/lightbox';

@Component({
  selector: 'spk-gallery',
  standalone: true,
  imports: [GalleryModule,LightboxModule],
  templateUrl: './spk-gallery.html',
  styleUrl: './spk-gallery.scss'
})
export class SpkGallery {
 image = input<any>([]);
 imageData1 = input<any>([]);
 imageData = input<any>([]);
 mainClass = input<any>();
 colClass = input<any>();
 columns = input<any[]>([]);
 lightboxClass = input<string>('');
 lightboxClass1 = input<string>('');
@Input() badge:any
 gallerize = input<string>('');
constructor(public gallery: Gallery, public lightbox: Lightbox) {}
ngOnInit() {
  /** Basic Gallery Example */
  const lightboxRef = this.gallery.ref('lightbox');

  // Add custom gallery config to the lightbox (optional)
  lightboxRef.setConfig({
    imageSize: ImageSize.Cover,
    thumbPosition: ThumbnailsPosition.Top,
  });
}
}
