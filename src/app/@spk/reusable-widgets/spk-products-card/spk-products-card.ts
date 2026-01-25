import { Component, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'spk-products-card',
  imports: [],
  templateUrl: './spk-products-card.html',
  styleUrl: './spk-products-card.scss'
})
export class SpkProductsCard {
  constructor(private sanitizer: DomSanitizer) {

  }

   products = input<any>();
  getSanitizedSVG(svgContent: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgContent);
}
}
