import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'spk-toast',
  standalone: true,
  imports: [NgbToastModule,CommonModule],
  templateUrl: './spk-toast.html',
  styleUrl: './spk-toast.scss'
})
export class SpkToast {
  @Input() show = false; // Determines if the toast is visible
   title = input(''); // Title of the toast
   content = input(''); // Content of the toast
   header = input(''); // Content of the toast
   toastImage = input('');
   buttonClass = input(''); // Content of the toast
   btnClass = input(''); // Content of the toast
  @Input() content1 = ''; // Content of the toast
   autohide = input(false); // Autohide functionality
  @Output() hide = new EventEmitter<void>(); // Emit event when the toast is hidden
  @Output() closeToast = new EventEmitter<void>();

  onClose() {
    this.closeToast.emit();  // Emit an event when the button is clicked
  }
  onHide() {
    this.show = false;
    this.hide.emit();
  }

  show9 = true;
  hidden = () => {
    this.show9 = false;
  };
}
