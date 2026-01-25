
import { Component, input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import flatpickr from 'flatpickr';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { FlatpickrDirective, provideFlatpickrDefaults } from 'angularx-flatpickr';
@Component({
  selector: 'spk-flatpickr',
  standalone: true,
  imports: [FlatpickrDirective, FormsModule, ReactiveFormsModule],
  providers: [
    FlatpickrDefaults,provideFlatpickrDefaults()
  ],
  templateUrl: './spk-flatpickr.html',
  styleUrl: './spk-flatpickr.scss'
})
export class SpkFlatpickr {
   altInput = input<boolean>(false);
   convertModelValue = input<boolean>(true);
   enableTime = input<boolean>(true);
   noCalendar = input<boolean>(false);
   inline = input<boolean>(false);
   class = input<string>('');
   dateFormat = input<string>('');
   placeholder = input<string>('');
   mode = input<any>('');

  inlineDatePicker: boolean = false;
  weekNumbers!: true
  // selectedDate: Date | null = null;
  flatpickrOptions: any = {
    inline: true,
  disableMobile: true
  };
  rangeValue: any // Default to a single date value


  // flatpickrOptions: FlatpickrOptions;
  // rangeValue: { from: Date; to: Date } = {
  //   from: new Date(),
  //   to: (new Date() as any)['fp_incr'](10)
  // };
  constructor() {}

  ngOnInit() {
    this.flatpickrOptions = {
      enableTime: true,
      noCalendar: true,
      dateFormat: 'H:i',
      disableMobile: true
    }

    flatpickr('#inlinetime', this.flatpickrOptions);

      this.flatpickrOptions = {
        enableTime: true,
        dateFormat: 'Y-m-d H:i', // Specify the format you want
        defaultDate: '2023-11-07 14:30', // Set the default/preloaded time (adjust this to your desired time)
        disableMobile: true
      };

      flatpickr('#pretime', this.flatpickrOptions);
  }
}
