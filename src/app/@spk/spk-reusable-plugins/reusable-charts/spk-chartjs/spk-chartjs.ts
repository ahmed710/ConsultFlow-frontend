import { Component, input } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'spk-chartjs',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './spk-chartjs.html',
  styleUrl: './spk-chartjs.scss'
})
export class SpkChartjs {
   ChartData = input<any>(undefined, { alias: "data" });
   ChartOptions = input<any>(undefined, { alias: "options" });
   ChartType = input<any>(undefined, { alias: "type" });


}
