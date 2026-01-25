import { Component, input } from '@angular/core';

@Component({
  selector: 'spk-team-card',
  imports: [],
  templateUrl: './spk-team-card.html',
  styleUrl: './spk-team-card.scss'
})
export class SpkTeamCard {
   team = input<any>('');
}
