import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'spk-border-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-border-card.html',
  styleUrl: './spk-border-card.scss'
})
export class SpkBorderCard {
   image = input<string>('');
   title = input<string>('');
   borderClass = input<string>('');
   iconClass = input<string>('');
   status = input<string>('');
   badges = input<string[]>([]);
   badgeClasses = input<string[]>([]);
   avatars = input<string[]>([]);
}
