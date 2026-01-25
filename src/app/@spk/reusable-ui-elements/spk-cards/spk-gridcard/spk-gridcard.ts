import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'spk-gridcard',
  standalone: true,
  imports: [],
  templateUrl: './spk-gridcard.html',
  styleUrl: './spk-gridcard.scss'
})
export class SpkGridcard {
  @Input() image:string = '';
   title = input<string>('');
   discription = input<string>('');
   discription1 = input<string>('');
   status = input<string>('');
   button = input<boolean>(false);
   text1 = input<boolean>(false);
}
