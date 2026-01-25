import { Component, input } from '@angular/core';
import { SpkApexChart } from '../../../spk-reusable-plugins/reusable-charts/spk-apex-charts/spk-apex-charts';

@Component({
  selector: 'spk-exchange-card',
  imports: [SpkApexChart],
  templateUrl: './spk-exchange-card.html',
  styleUrl: './spk-exchange-card.scss'
})
export class SpkExchangeCard {
   currency = input<any>();
   cardClass = input<string>();
}
