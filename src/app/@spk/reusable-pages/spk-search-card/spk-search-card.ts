import { Component, input } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'spk-search-card',
  imports: [NgbModule],
  templateUrl: './spk-search-card.html',
  styleUrl: './spk-search-card.scss'
})
export class SpkSearchCard {
   search = input<any>();
}
