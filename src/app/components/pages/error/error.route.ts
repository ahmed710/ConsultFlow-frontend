import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
  {path:'pages',children:[
    {
      path: 'error/error401',
      loadComponent: () =>
        import('./error401/error401').then((m) => m.Error401),
    },
    {
      path: 'error/error404',
      loadComponent: () =>
        import('./error404/error404').then((m) => m.Error404),
    },
    {
      path: 'error/error500',
      loadComponent: () =>
        import('./error500/error500').then((m) => m.Error500),
    },
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class errorRoutingModule {
  static routes = admin;
}
