import { Component, input } from '@angular/core';
import { SpkApexChart } from '../../spk-reusable-plugins/reusable-charts/spk-apex-charts/spk-apex-charts';

@Component({
  selector: 'spk-stock-card1',
  imports: [SpkApexChart],
  templateUrl: './spk-stock-card1.html',
  styleUrl: './spk-stock-card1.scss'
})
export class SpkStockCard1 {
   stock = input<any>();
}
