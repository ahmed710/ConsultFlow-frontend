import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../../shared/shared.module';

@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [RouterModule,SharedModule],
  templateUrl: './basic.html',
  styleUrl: './basic.scss'
})
export class Basic {
  constructor(){
    document.body.classList.add('authentication-background');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('authentication-background');
  }
  showPassword = false;
  toggleClass = "off-line";
  createpassword() {
    this.showPassword = !this.showPassword;
    if (this.toggleClass === "off-line") {
      this.toggleClass = "line";
    } else {
      this.toggleClass = "off-line";
    }
  }


}
