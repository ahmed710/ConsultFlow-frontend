import { Component, Input } from '@angular/core';

@Component({
  selector: 'spk-employee-card',
  imports: [],
  templateUrl: './spk-employee-card.html',
  styleUrl: './spk-employee-card.scss'
})
export class SpkEmployeeCard {
  @Input() widget: any ;
}
