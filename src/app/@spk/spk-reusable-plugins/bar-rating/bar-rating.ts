
import { ChangeDetectionStrategy, Component, EventEmitter, Output, input, output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  selector: 'app-bar-rating',
  standalone: true,
  imports: [BarRatingModule, FormsModule, ReactiveFormsModule, NgbRatingModule],
  templateUrl: './bar-rating.html',
  styleUrl: './bar-rating.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarRating {
   rate = input<number>(0); // Rating value (can be decimal)
   maxStars = input<number>(5); // Maximum stars to display
   starTemplate = input<any>(); // Custom star template
   readonly = input<boolean>(false);
  hovered: number = 1
  rateChange = output<number>();


  //@Output() rateChange = new EventEmitter<number>(); // Emit selected rating
   control = input<FormControl>(new FormControl());

  currentRate: number = 0;

  ngOnInit(): void {
    this.currentRate = this.rate(); // Initialize with input rate
  }

  onRateChange(rate: number): void {
    this.currentRate = rate;
    this.rateChange.emit(rate); // Emit the selected rating value (decimal)
  }
  hoveredChange = output<number>();;
  //@Output() hoveredChange = new EventEmitter<number>(); // Emit hovered rating

  onHover(value: number): void {
    this.hovered = value;
    this.hoveredChange.emit(value);
  }

  onLeave(): void {
    this.hovered = 0;
    this.hoveredChange.emit(0);
  }
}
