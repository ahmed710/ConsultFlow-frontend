import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'spk-medical-card',
  imports: [CommonModule],
  templateUrl: './spk-medical-card.html',
  styleUrl: './spk-medical-card.scss'
})
export class SpkMedicalCard {
   medical = input<any>();
  constructor( private sanitizer: DomSanitizer) {
  }

    getSanitizedSVG(iconSvg: string): SafeHtml {
      return this.sanitizer.bypassSecurityTrustHtml(iconSvg);
    }
}
