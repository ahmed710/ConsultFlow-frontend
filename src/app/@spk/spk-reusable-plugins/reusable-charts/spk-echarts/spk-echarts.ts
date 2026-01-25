import { Component, input } from '@angular/core';
import { NGX_ECHARTS_CONFIG, NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import type { EChartsOption } from 'echarts';
@Component({
  selector: 'spk-echarts',
  standalone: true,
  imports: [NgxEchartsModule],
  providers: [
    {
      provide: NGX_ECHARTS_CONFIG,
      useFactory: () => ({ echarts: echarts }),
    },
  ],
  templateUrl: './spk-echarts.html',
  styleUrl: './spk-echarts.scss'
})
export class SpkEcharts {
   options = input<EChartsOption>({});
   echartId = input<string>('');         // Dynamic table ID
   theme = input<string>('');
   merge = input<string>('');



}
