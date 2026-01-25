import { Component, input } from '@angular/core';

@Component({
  selector: 'spk-bgcolor-card',
  standalone: true,
  imports: [],
  templateUrl: './spk-bgcolor-card.html',
  styleUrl: './spk-bgcolor-card.scss'
})
export class SpkBgcolorCard {
   image = input<string>('');
   status = input<string>('');
   BgColor = input<string>('');
   name = input<string>('');
   textColor = input<string>('');
   icon = input<boolean>(false);

}
