import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'spk-horizontal-card',
  standalone: true,
  imports: [],
  templateUrl: './spk-horizontal-card.html',
  styleUrl: './spk-horizontal-card.scss'
})
export class SpkHorizontalCard {
   image = input<string>('');
   title = input<boolean>();
   subtitle = input<string | undefined>('');
  @Input() headerTitle?:string = '';
   discription = input<string | undefined>('');
   discriptionClass = input<string | undefined>('');
  @Input() discription1?:string = '';
  @Input() status?:string = '';
   imagePlacementStart = input<boolean | undefined>(false);
   imagePlacementEnd = input<boolean | undefined>(false);
}
