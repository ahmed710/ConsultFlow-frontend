import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'spk-analytics-card',
  imports: [CommonModule],
  templateUrl: './spk-analytics-card.html',
  styleUrl: './spk-analytics-card.scss'
})
export class SpkAnalyticsCard {
   iconSvg = input<string>();
   title = input<string>();
   value = input<string>();
   percentageChange = input<string>();
   changeType = input<'up' | 'down'>('up'); // For the icon and color change
   period = input<string>(); // e.g., "This Year"
   colorClass = input<string>(); // For dynamic background color

  constructor( private sanitizer: DomSanitizer) {
  }

    getSanitizedSVG(Svg: string): SafeHtml {
      return this.sanitizer.bypassSecurityTrustHtml(Svg);
    }
}
