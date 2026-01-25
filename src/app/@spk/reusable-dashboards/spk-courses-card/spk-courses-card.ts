import { Component, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'spk-courses-card',
  imports: [],
  templateUrl: './spk-courses-card.html',
  styleUrl: './spk-courses-card.scss'
})
export class SpkCoursesCard {
   course = input<any>();
  constructor( private sanitizer: DomSanitizer) {
  }

    getSanitizedSVG(iconSvg: string): SafeHtml {
      return this.sanitizer.bypassSecurityTrustHtml(iconSvg);
    }
}
