import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'spk-overlay-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-overlay-card.html',
  styleUrl: './spk-overlay-card.scss'
})
export class SpkOverlayCard {
   imageUrl = input<string>('');
  @Input() title?: string = '';
  @Input() bodyTitle?: string = '';
  @Input() content: string = '';
  @Input() footerText: string = '';
   contentPosition = input<string>('');
}
