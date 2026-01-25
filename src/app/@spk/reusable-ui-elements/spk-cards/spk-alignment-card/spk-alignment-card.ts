import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'spk-alignment-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-alignment-card.html',
  styleUrl: './spk-alignment-card.scss'
})
export class SpkAlignmentCard {
   title = input<string>('');
   text = input<string>('');
   buttonText = input<string>('Go somewhere');
   imageUrl = input<string>('');
   alignmentClass = input<string>(''); // For text alignment
}
