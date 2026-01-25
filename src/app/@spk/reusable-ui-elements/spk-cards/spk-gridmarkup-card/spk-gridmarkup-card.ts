import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'spk-gridmarkup-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-gridmarkup-card.html',
  styleUrl: './spk-gridmarkup-card.scss'
})
export class SpkGridmarkupCard {
   imageUrl = input<string>('');
   title = input<string>('');
   text = input<string>('');
   buttonText = input<string>('Purchase');
   buttonClass = input<string>('btn-primary');
}
