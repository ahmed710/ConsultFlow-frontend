import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'spk-blockquote-card',
  standalone: true,
  imports: [],
  templateUrl: './spk-blockquote-card.html',
  styleUrl: './spk-blockquote-card.scss'
})
export class SpkBlockquoteCard {
   cardBg = input<string>('');
   quote = input<string>(''); // The main quote text
   author = input<string>(''); // The author of the quote
   textColor1 = input<string>(''); // The author of the quote
   textColor = input<string>(''); // The author of the quote
  @Input() sourceTitle: string = ''; // The source or citation title
}
