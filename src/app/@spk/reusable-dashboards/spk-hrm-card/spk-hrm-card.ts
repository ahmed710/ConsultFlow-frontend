import { Component, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'spk-hrm-card',
  imports: [],
  templateUrl: './spk-hrm-card.html',
  styleUrl: './spk-hrm-card.scss'
})
export class SpkHrmCard {
   hrm = input<any>();
  constructor( private sanitizer: DomSanitizer) {
  }

    getSanitizedSVG(iconSvg: string): SafeHtml {
      return this.sanitizer.bypassSecurityTrustHtml(iconSvg);
    }
}
