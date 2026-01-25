import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'spk-header-footer-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-header-footer-card.html',
  styleUrl: './spk-header-footer-card.scss'
})
export class SpkHeaderFooterCard {
   avatar = input<string>(''); // Avatar image URL
   name = input<string>(''); // Person's name
   jobTitle = input<string>(''); // Job title
   socialMediaButtons = input<{
    icon: string;
    class: string;
    action: () => void;
}[]>([]); // Social media buttons
}
