import { Component, input } from '@angular/core';

@Component({
  selector: 'spk-profile-card',
  imports: [],
  templateUrl: './spk-profile-card.html',
  styleUrl: './spk-profile-card.scss'
})
export class SpkProfileCard {
   profile = input<any>();
}
