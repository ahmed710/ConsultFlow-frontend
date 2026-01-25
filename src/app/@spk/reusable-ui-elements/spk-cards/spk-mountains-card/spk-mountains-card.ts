import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';


@Component({
  selector: 'spk-mountains-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-mountains-card.html',
  styleUrl: './spk-mountains-card.scss'
})
export class SpkMountainsCard {
   imageUrl = input<string>('');
   title = input<string>('');
   badgeText = input<string>('');
   badgeClass = input<string>('bg-primary'); // Default badge class
   text = input<string>('');
}
