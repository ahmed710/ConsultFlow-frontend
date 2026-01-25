import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'spk-title-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-title-card.html',
  styleUrl: './spk-title-card.scss'
})
export class SpkTitleCard {
   imageUrl = input<string>('');
   title = input<string>('');
   text = input<string>('');
  @Input() footerText?: string; // Optional string
  @Input() listItems?: string[]; // Optional array of strings
  @Input() buttonText?: string; // Optional string
  @Input() links?: { text: string; href: string; class: string }[];
}
