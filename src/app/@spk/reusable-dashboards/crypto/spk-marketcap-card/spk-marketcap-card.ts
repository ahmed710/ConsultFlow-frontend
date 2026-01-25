import { Component, input } from '@angular/core';
import { SpkApexChart } from '../../../spk-reusable-plugins/reusable-charts/spk-apex-charts/spk-apex-charts';

@Component({
  selector: 'spk-marketcap-card',
  imports: [SpkApexChart],
  templateUrl: './spk-marketcap-card.html',
  styleUrl: './spk-marketcap-card.scss'
})
export class SpkMarketcapCard {
   market = input<any>();
   cardClass = input<string>();
   bodyClass = input<string>();
}
