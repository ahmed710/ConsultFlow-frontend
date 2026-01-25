import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'spk-review-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-review-card.html',
  styleUrl: './spk-review-card.scss'
})
export class SpkReviewCard {
   rating = input<number>(0); // Rating (1 to 5)
   timestamp = input<string>(''); // Review timestamp
   reviewTitle = input<string>(''); // Review title
   reviewText = input<string>(''); // Review body text
   reviewerName = input<string>(''); // Reviewer name
   reviewerAvatar = input<string>(''); // Reviewer avatar image URL
}
