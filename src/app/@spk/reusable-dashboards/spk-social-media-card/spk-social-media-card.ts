import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SpkDropdowns } from '../../reusable-ui-elements/spk-dropdowns/spk-dropdowns';

@Component({
  selector: 'spk-social-media-card',
  imports: [CommonModule,SpkDropdowns],
  templateUrl: './spk-social-media-card.html',
  styleUrl: './spk-social-media-card.scss'
})
export class SpkSocialMediaCard {
   title = input<string>();
   value = input<string>();
   percentage = input<string>();
   status = input<string>();
   icon = input<string>();
   backgroundClass = input<string>();
   statusClass = input<string>();
  constructor( private sanitizer: DomSanitizer) {
  }

  getSanitizedSVG(icon: string): SafeHtml {
      return this.sanitizer.bypassSecurityTrustHtml(icon);
  }
}
