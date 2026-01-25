import { Component, input } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'spk-apexcharts',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './spk-apex-charts.html',
  styleUrl: './spk-apex-charts.scss'
})
export class SpkApexChart {
   chartOptions = input<any>();  // Accept chart options as input

  constructor() { }

  ngOnInit(): void {
  }
}
