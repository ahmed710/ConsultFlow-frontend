import { Component, input } from '@angular/core';

@Component({
  selector: 'spk-wallet-card',
  imports: [],
  templateUrl: './spk-wallet-card.html',
  styleUrl: './spk-wallet-card.scss'
})
export class SpkWalletCard {
   wallet = input<any>();
}
