import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'spk-nft-card',
  imports: [RouterModule],
  templateUrl: './spk-nft-card.html',
  styleUrl: './spk-nft-card.scss'
})
export class SpkNftCard {
   nft = input<any>();
}
