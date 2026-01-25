import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'spk-featured-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-featured-card.html',
  styleUrl: './spk-featured-card.scss'
})
export class SpkFeaturedCard {
  @Input() header: string = ''; // Card header (optional)
  @Input() title: string = ''; // Card title
   text = input<string>(''); // Card body text
  @Input() buttonText: string = ''; // Button text (optional)
  @Input() links: { text: string; href: string; class: string }[] = [];
  @Input() subtitle: string = ''; // Default to an empty string
   buttonClass = input<string>('btn-primary');
}
