import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'spk-school-card',
  imports: [CommonModule],
  templateUrl: './spk-school-card.html',
  styleUrl: './spk-school-card.scss'
})
export class SpkSchoolCard {
   title = input<string>('');
   value = input<string>('');
   trend = input<string>('');
   icon = input<string>('');
   bgColor = input<string>('primary'); // Default to 'primary'
   trendColor = input<string>(''); // Trend color (e.g., 'success' or 'danger')

  constructor( private sanitizer: DomSanitizer) {
  }

    getSanitizedSVG(icon: string): SafeHtml {
      return this.sanitizer.bypassSecurityTrustHtml(icon);
    }
}
