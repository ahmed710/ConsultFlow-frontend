import { Routes, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FullLayout } from './shared/layouts/full-layout/full-layout';
import { Full_Content_Routes } from './shared/routes/content.routes';
import { Authentication_ROUTES } from './shared/routes/authentication.routes';
import { AuthenticationLayout } from './shared/layouts/authentication-layout/authentication-layout';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },

  {
    path: 'auth/login',
    loadComponent: () =>
      import('../app/authentication/login-page/login-page').then((m) => m.LoginPage),
  },

  {
    path: '',
    component: FullLayout,
    children: Full_Content_Routes,
    // Example guard using lazy inject
    canActivate: [() => {
      const auth = inject(Auth);
      const router = inject(Router);

      if (auth.currentUser) return true;

      router.navigate(['/auth/login']);
      return false;
    }],
  },

  {
    path: '',
    component: AuthenticationLayout,
    children: Authentication_ROUTES,
  },
];
