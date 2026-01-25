import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'spk-progressbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-progressbar.html',
  styleUrl: './spk-progressbar.scss'
})
export class SpkProgressbar {
   value = input<number>(0); // Progress value between 0 and 100
   size = input<string>(''); // e.g., 'progress-xs', 'progress-sm', 'progress-lg', 'progress-xl'
   barClass = input<string>('bg-primary'); // Bootstrap classes for colors
   progressClass = input<string | undefined>('bg-primary'); // Bootstrap classes for colors
   showLabel = input<boolean>(false); // Whether to show the percentage label
   color = input<any>();
   title = input<any>();
}
