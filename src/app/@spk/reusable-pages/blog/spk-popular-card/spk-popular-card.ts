import { Component, input } from '@angular/core';

@Component({
  selector: 'spk-popular-card',
  imports: [],
  templateUrl: './spk-popular-card.html',
  styleUrl: './spk-popular-card.scss'
})
export class SpkPopularCard {
   blog = input<any>();
}
