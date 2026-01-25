import { Component, input } from '@angular/core';
import { SpkDropdowns } from '../../reusable-ui-elements/spk-dropdowns/spk-dropdowns';

@Component({
  selector: 'spk-friends-card',
  imports: [SpkDropdowns],
  templateUrl: './spk-friends-card.html',
  styleUrl: './spk-friends-card.scss'
})
export class SpkFriendsCard {
   obj = input<any>();
}
