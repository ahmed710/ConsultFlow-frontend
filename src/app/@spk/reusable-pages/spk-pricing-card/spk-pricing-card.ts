import { Component, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'spk-pricing-card',
  imports: [],
  templateUrl: './spk-pricing-card.html',
  styleUrl: './spk-pricing-card.scss'
})
export class SpkPricingCard {
  constructor(private sanitizer: DomSanitizer) {}
   price = input<any>();
   cardClass = input<string>('');

  getSanitizedSVG(svgContent: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgContent);
}
isString(value: any): value is string {
  return typeof value === 'string';
}
}
