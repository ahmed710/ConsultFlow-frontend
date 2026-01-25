import { Component, EventEmitter, Output, input } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'spk-alerts',
  standalone: true,
  imports: [NgbAlertModule],
  templateUrl: './spk-alerts.html',
  styleUrl: './spk-alerts.scss'
})
export class SpkAlerts {
   isDismissible = input(false);
   variant = input<string>('');
  @Output() close = new EventEmitter<void>();
   title = input<string>('');
   linkText = input<string>('');
   buttonClass = input<string>('');


  onClose() {
    this.close.emit(); // Emit close event
  }
}
