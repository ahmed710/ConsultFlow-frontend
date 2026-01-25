import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'spk-utilities-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-utilities-card.html',
  styleUrl: './spk-utilities-card.scss'
})
export class SpkUtilitiesCard {
   widthClass = input<string>('');
   title = input<string>('');
   discription = input<string>('');
}
