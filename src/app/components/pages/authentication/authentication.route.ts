import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
export const admin: Routes = [
  {
    path: 'pages/authentication',
    children: [
      {
        path: 'create-password/basic',
        loadComponent: () =>
          import('./create-password/basic/basic').then(
            (m) => m.Basic
          ),
      },
      {
        path: 'create-password/cover',
        loadComponent: () =>
          import('./create-password/cover/cover').then(
            (m) => m.Cover
          ),
      },
      {
        path: 'reset-password/basic',
        loadComponent: () =>
          import('./reset-password/basic/basic').then(
            (m) => m.Basic
          ),
      },
      {
        path: 'reset-password/cover',
        loadComponent: () =>
          import('./reset-password/cover/cover').then(
            (m) => m.Cover
          ),
      },
      {
        path: 'sign-up/basic',
        loadComponent: () =>
          import('./sign-up/basic/basic').then(
            (m) => m.Basic
          ),
      },
      {
        path: 'sign-up/cover',
        loadComponent: () =>
          import('./sign-up/cover/cover').then(
            (m) => m.Cover
          ),
      },
      {
        path: 'sign-in/basic',
        loadComponent: () =>
          import('./sign-in/basic/basic').then(
            (m) => m.Basic
          ),
      },
      {
        path: 'sign-in/cover',
        loadComponent: () =>
          import('./sign-in/cover/cover').then(
            (m) => m.Cover
          ),
      },
      {
        path: 'two-step-verification/basic',
        loadComponent: () =>
          import('./two-step-verification/basic/basic').then(
            (m) => m.Basic
          ),
      },
      {
        path: 'two-step-verification/cover',
        loadComponent: () =>
          import('./two-step-verification/cover/cover').then(
            (m) => m.Cover
          ),
      },

    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class authenticationRoutingModule {
  static routes = admin;
}
