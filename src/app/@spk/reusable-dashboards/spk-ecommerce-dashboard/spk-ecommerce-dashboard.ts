import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'spk-ecommerce-dashboard',
  imports: [CommonModule],
  templateUrl: './spk-ecommerce-dashboard.html',
  styleUrl: './spk-ecommerce-dashboard.scss'
})
export class SpkEcommerceDashboard {
   iconSvg = input<string>(); // For the SVG icon path
   title = input<string>();   // For the card's title
   value = input<string>();   // For the card's value
   colorClass = input<string>(); // For dynamic background colors (e.g., bg-primary-transparent)
   CardClass = input<string>(); // For the SVG icon path
   description = input<string>(); // For additional description under the card
  constructor( private sanitizer: DomSanitizer) {
  }

    getSanitizedSVG(iconSvg: string): SafeHtml {
      return this.sanitizer.bypassSecurityTrustHtml(iconSvg);
    }
}
