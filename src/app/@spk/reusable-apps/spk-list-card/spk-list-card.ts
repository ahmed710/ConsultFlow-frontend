import { Component, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'spk-list-card',
  imports: [],
  templateUrl: './spk-list-card.html',
  styleUrl: './spk-list-card.scss'
})
export class SpkListCard {
  constructor(private sanitizer: DomSanitizer) {}
   list = input<any>();
   titleClass = input<string>();
   listCard = input<boolean>();
  getSanitizedSVG(svgContent: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgContent);
}

}
