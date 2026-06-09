import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../../shared/shared.module';
import { AuthService } from '../sign-up-service/sign-up-service.services';

@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [RouterModule, SharedModule, FormsModule],
  templateUrl: './basic.html',
  styleUrl: './basic.scss'
})
export class Basic {

  email = '';
  password = '';
  role = 'User';

  showPassword = false;
  toggleClass = 'off-line';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    document.body.classList.add('authentication-background');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('authentication-background');
  }

  createpassword() {
    this.showPassword = !this.showPassword;
    this.toggleClass = this.toggleClass === 'off-line' ? 'line' : 'off-line';
  }

  register() {
    if (!this.email || !this.password) {
      alert('Please fill all fields');
      return;
    }
  if (this.password.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }
  console.log(this.password)  ;

    this.authService.register({
      email: this.email,
      password: this.password,
      role: this.role
    }).subscribe({
      next: () => {
        alert('Registration successful 🎉');
        this.router.navigate(['/auth/login']);
      },
      error: (err) => {
        console.error(err);
        alert(err.error?.message || 'Registration failed');
      }
    });
  }
}
