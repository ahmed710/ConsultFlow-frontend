import { Component, input } from '@angular/core';

@Component({
  selector: 'spk-deals-card',
  imports: [],
  templateUrl: './spk-deals-card.html',
  styleUrl: './spk-deals-card.scss'
})
export class SpkDealsCard {
   deal = input<any>();
   cardClass = input<string>();
   bodyClass = input<string>();
}
