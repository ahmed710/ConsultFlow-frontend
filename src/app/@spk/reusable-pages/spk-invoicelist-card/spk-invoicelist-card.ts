import { Component, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'spk-invoicelist-card',
  imports: [],
  templateUrl: './spk-invoicelist-card.html',
  styleUrl: './spk-invoicelist-card.scss'
})
export class SpkInvoicelistCard {
  constructor(private sanitizer: DomSanitizer) {}
   list = input<any>();
  getSanitizedSVG(svgContent: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgContent);
}
}
