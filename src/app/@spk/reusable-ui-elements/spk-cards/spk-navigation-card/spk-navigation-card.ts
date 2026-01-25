import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'spk-navigation-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-navigation-card.html',
  styleUrl: './spk-navigation-card.scss'
})
export class SpkNavigationCard {
   tabType = input<string>('');
   title = input<string>('');
   active = input<string>('');
   disabled = input<string>('');
   text = input<string>('');
   buttonText = input<string>('');
   label = input<string>('');
   link = input<string>('');
   tabs = input<{
    label: string;
    active: boolean;
    disabled: any;
}[]>([]);

}
