import { Component, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'spk-products-card',
  imports: [],
  templateUrl: './spk-products-card.html',
  styleUrl: './spk-products-card.scss'
})
export class SpkProductsCard {
   cardTitle = input<string>();
   cardValue = input<string>();
   cardPercentage = input<string>();
   cardPercentageColor = input<string>();
   cardIcon = input<string>();
   cardIconColor = input<string>();
   cardBgColor = input<string>();
   cardSubtitle = input<string>();
  constructor( private sanitizer: DomSanitizer) { }

  getSanitizedSVG(cardIcon: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(cardIcon);
  }
}
