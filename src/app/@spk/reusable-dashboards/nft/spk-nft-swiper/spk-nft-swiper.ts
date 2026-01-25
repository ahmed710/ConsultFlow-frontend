import { Component, CUSTOM_ELEMENTS_SCHEMA, input } from '@angular/core';
import { SpkDropdowns } from '../../../reusable-ui-elements/spk-dropdowns/spk-dropdowns';

@Component({
  selector: 'spk-nft-swiper',
  imports: [SpkDropdowns],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './spk-nft-swiper.html',
  styleUrl: './spk-nft-swiper.scss'
})
export class SpkNftSwiper {
   nft = input<any>();
}
