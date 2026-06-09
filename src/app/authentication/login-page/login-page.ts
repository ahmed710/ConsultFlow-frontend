import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  OnDestroy,
  Renderer2,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { Container, Engine } from '@tsparticles/engine';
import { NgParticlesService, NgxParticlesModule } from '@tsparticles/angular';
import { loadFull } from 'tsparticles';

import { SharedModule } from '../../shared/shared.module';
import { FirebaseService } from '../../shared/services/firebase.service';
import { AuthService } from '../services/auth.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxParticlesModule,
    SharedModule,
    ToastrModule,
  ],
  providers: [FirebaseService, ToastrService],
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {
  id = 'tsparticles';
  loginForm!: FormGroup;
  showPassword = false;
  toggleClass = 'ri-eye-off-line';

  errorMessage = '';
  _error: { name: string; message: string } = { name: '', message: '' };

  particlesOptions: any = {
    particles: {
      number: { value: 200, density: { enable: true, value_area: 400 } },
      color: { value: '#985ffd' },
      shape: { type: 'circle' },
      opacity: { value: 0.5 },
      size: { value: 1.5 },
      line_linked: {
        enable: true,
        distance: 100,
        color: '#fff',
        opacity: 1,
        width: 1,
      },
      move: { enable: true, speed: 1 },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'grab' },
        onClick: { enable: true, mode: 'push' },
      },
    },
    retina_detect: false,
  };

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService,
    private apiService: ApiService,
    private ngParticlesService: NgParticlesService
  ) {}

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'authentication-background');

    this.ngParticlesService.init(async (engine: Engine) => {
      await loadFull(engine);
    });

    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'authentication-background');
  }

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  get form() {
    return this.loginForm.controls;
  }

  clearErrorMessage() {
    this.errorMessage = '';
    this._error = { name: '', message: '' };
  }

  async login() {
    this.clearErrorMessage();

    if (this.loginForm.invalid) {
      this.toastr.error('Please enter valid credentials', 'ConsultFlow');
      return;
    }

    const { username, password } = this.loginForm.value;

    try {
      // 🔐 Firebase login
      await this.authService.loginWithEmail(username, password);

      // 🔑 Get Firebase ID token
      const idToken = await this.authService.getIdToken();

      // 🌐 Verify token with backend
      this.apiService.verifyToken(idToken).subscribe({
        next: () => {
          this.toastr.success('Login successful', 'ConsultFlow', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
          });
          this.router.navigate(['/dashboards/projects/dashboard']);
        },
        error: () => {
          this.toastr.error('Token verification failed', 'ConsultFlow');
        },
      });
    } catch (error: any) {
      this._error = error;
      this.toastr.error(
        error?.message || 'Authentication failed',
        'ConsultFlow'
      );
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    this.toggleClass =
      this.toggleClass === 'ri-eye-line'
        ? 'ri-eye-off-line'
        : 'ri-eye-line';
  }
}
