import { Component, input } from '@angular/core';

@Component({
  selector: 'spk-cardgroups-card',
  standalone: true,
  imports: [],
  templateUrl: './spk-cardgroups-card.html',
  styleUrl: './spk-cardgroups-card.scss'
})
export class SpkCardgroupsCard {
   image = input<string>('');
   title = input<string>('');
   discription = input<string>('');
   status = input<string>('');
}
