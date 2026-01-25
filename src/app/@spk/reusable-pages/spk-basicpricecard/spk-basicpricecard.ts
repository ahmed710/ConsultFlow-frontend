import { Component, input } from '@angular/core';

@Component({
  selector: 'spk-basicpricecard',
  imports: [],
  templateUrl: './spk-basicpricecard.html',
  styleUrl: './spk-basicpricecard.scss'
})
export class SpkBasicpricecard {
   price = input<any>();
  isString(value: any): value is string {
    return typeof value === 'string';
  }

}
