import { Routes } from '@angular/router';
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
  { path: '', component: FullLayout, children: Full_Content_Routes},
  { path: '', component: AuthenticationLayout, children: Authentication_ROUTES },
];
