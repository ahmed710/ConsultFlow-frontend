import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'spk-image-card',
  standalone: true,
  imports: [],
  templateUrl: './spk-image-card.html',
  styleUrl: './spk-image-card.scss'
})
export class SpkImageCard {
   image = input<string>('');
   title = input<string | undefined>('');
  @Input() headertitle?:string = '';
   footertext = input<boolean>();
   descriptionClass = input<string | undefined>('');
   discription = input<string>('');
   status = input<string | undefined>('');
   TopImagePlacement = input<boolean>(false);
   bottomImagePlacement = input<boolean>(false);
   customStatusPlacement = input<boolean>(false);
   BottomStatusPlacement = input<boolean>(false);
}
