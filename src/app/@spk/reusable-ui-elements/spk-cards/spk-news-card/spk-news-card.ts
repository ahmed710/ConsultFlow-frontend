import { Component, input } from '@angular/core';

@Component({
  selector: 'spk-news-card',
  standalone: true,
  imports: [],
  templateUrl: './spk-news-card.html',
  styleUrl: './spk-news-card.scss'
})
export class SpkNewsCard {
   headerTitle = input<string>(''); // Header title
   bodyTitle = input<string>(''); // Main card title
   bodyText = input<string>(''); // Supporting body text
   primaryButton = input<{
    text: string;
    action: () => void;
}>({ text: '', action: () => { } }); // Primary button details
   secondaryButton = input<{
    text: string;
    action: () => void;
}>({ text: '', action: () => { } }); // Secondary button details
   footerText = input<string>(''); // Footer text
}
