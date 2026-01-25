import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'spk-link-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-link-card.html',
  styleUrl: './spk-link-card.scss'
})
export class SpkLinkCard {
   imageUrl = input<string>('');
   name = input<string>('');
   title = input<string>('');
  @Input() department: string = '';
  @Input() age: number | null = null;
   gender = input<string>('');
   cardBorder = input<boolean>(false); // To control card border styling
   textInfoClass = input<string>(''); // For conditional styling
}
