import { Component, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'spk-jobdetails',
  imports: [NgbModule],
  templateUrl: './spk-jobdetails.html',
  styleUrl: './spk-jobdetails.scss'
})
export class SpkJobdetails {
   jobdetails = input<any>();
  constructor( private sanitizer: DomSanitizer) {
  }

    getSanitizedSVG(iconSvg: string): SafeHtml {
      return this.sanitizer.bypassSecurityTrustHtml(iconSvg);
    }
}
