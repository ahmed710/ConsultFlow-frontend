import { Component, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'spk-project-card',
  imports: [],
  templateUrl: './spk-project-card.html',
  styleUrl: './spk-project-card.scss'
})
export class SpkProjectCard {
   project = input<any>();
  constructor( private sanitizer: DomSanitizer) {
  }

    getSanitizedSVG(iconSvg: string): SafeHtml {
      return this.sanitizer.bypassSecurityTrustHtml(iconSvg);
    }
}
