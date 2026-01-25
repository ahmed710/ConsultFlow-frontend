import { Component, input } from '@angular/core';
import { SpkApexChart } from '../../../spk-reusable-plugins/reusable-charts/spk-apex-charts/spk-apex-charts';

@Component({
  selector: 'spk-crypto-card',
  imports: [SpkApexChart],
  templateUrl: './spk-crypto-card.html',
  styleUrl: './spk-crypto-card.scss'
})
export class SpkCryptoCard {
   crypto = input<any>();
}
