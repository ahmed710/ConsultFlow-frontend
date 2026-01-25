

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const admin: Routes = [
  {path:'pages'}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class pagesRoutingModule {
  static routes = admin;
}
