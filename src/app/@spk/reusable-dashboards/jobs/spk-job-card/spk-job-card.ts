import { Component, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'spk-job-card',
  imports: [],
  templateUrl: './spk-job-card.html',
  styleUrl: './spk-job-card.scss'
})
export class SpkJobCard {
   job = input<any>();
  constructor( private sanitizer: DomSanitizer) {
  }

    getSanitizedSVG(iconSvg: string): SafeHtml {
      return this.sanitizer.bypassSecurityTrustHtml(iconSvg);
    }
}
