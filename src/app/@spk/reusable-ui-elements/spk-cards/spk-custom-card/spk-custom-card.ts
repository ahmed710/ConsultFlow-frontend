import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'spk-custom-card',
  standalone: true,
  imports: [CommonModule,NgbDropdownModule],
  templateUrl: './spk-custom-card.html',
  styleUrl: './spk-custom-card.scss'
})
export class SpkCustomCard {
   avatar = input<string>(''); // Avatar image URL
   name = input<string>(''); // User's name
   subtitle = input<string>(''); // Subtitle (e.g., age, gender)
   dropdownItems = input<string[]>([]); // Dropdown items
   bodyText = input<string>(''); // Card body text
   footerLeftText = input<string>(''); // Footer left text
   footerRightText = input<string>(''); // Footer right text
   footerRightTextClass = input<string>('text-success');
}
