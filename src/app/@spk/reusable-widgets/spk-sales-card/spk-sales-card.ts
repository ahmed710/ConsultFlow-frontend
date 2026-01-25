import { Component, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SpkApexChart } from '../../spk-reusable-plugins/reusable-charts/spk-apex-charts/spk-apex-charts';

@Component({
  selector: 'spk-sales-card',
  imports: [SpkApexChart],
  templateUrl: './spk-sales-card.html',
  styleUrl: './spk-sales-card.scss'
})
export class SpkSalesCard {
  constructor(private sanitizer: DomSanitizer) {

  }

   sales = input<any>();
  getSanitizedSVG(svgContent: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgContent);
}
}
