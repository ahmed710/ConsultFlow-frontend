
import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngb-collapse',
  standalone: true,
  imports: [NgbModule, FormsModule],
  templateUrl: './ngb-collapse.html',
  styleUrl: './ngb-collapse.scss'
})
export class NgbCollapse {
   items = input<any>([]);

}
