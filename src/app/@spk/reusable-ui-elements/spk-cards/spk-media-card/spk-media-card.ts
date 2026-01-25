import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'spk-media-card',
  standalone: true,
  imports: [],
  templateUrl: './spk-media-card.html',
  styleUrl: './spk-media-card.scss'
})
export class SpkMediaCard {
   avatar = input<string>(''); // Avatar image URL
   stats = input<{
    label: string;
    value: string;
}[]>([]); // Array of stats (e.g., Posts, Followers, Following)
   name = input<string>(''); // Person's name
   jobTitle = input<string>(''); // Job title
   aboutText = input<string>(''); // About text
  @Input() additionalText: string = ''; // Additional card body text
}
