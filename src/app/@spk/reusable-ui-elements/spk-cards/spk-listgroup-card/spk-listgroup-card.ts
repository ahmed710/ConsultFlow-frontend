import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'spk-listgroup-card',
  standalone: true,
  imports: [],
  templateUrl: './spk-listgroup-card.html',
  styleUrl: './spk-listgroup-card.scss'
})
export class SpkListgroupCard {
  @Input() header: string = '';
   items = input<string[]>([]);
  @Input() footer: string = '';
}
