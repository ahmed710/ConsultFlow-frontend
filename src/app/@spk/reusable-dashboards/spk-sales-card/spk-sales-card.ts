import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface SalesCards {
  title: string;
  value: string;
  change: string;
  changeType: string; // trending icon
  color: string;
  iconSvg: string;
}

@Component({
  selector: 'spk-sales-card',
  imports: [CommonModule],
  templateUrl: './spk-sales-card.html',
  styleUrl: './spk-sales-card.scss'
})
export class SpkSalesCard {
  data=input<SalesCards>()

  constructor( private sanitizer: DomSanitizer) {
  }

  getSanitizedSVG(svgContent: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgContent);
  }
}
