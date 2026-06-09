import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
  {path:'',children:[
    {
      path: 'ia',
      loadComponent: () =>
        import('./leaflet-maps/leaflet-maps').then(
          (m) => m.LeafletMaps
        ),
    },
  {
        path: 'ortools',
        loadComponent: () =>
          import('./orTools/orTools').then(
            (m) => m.OrTools
          ),
      },

  ]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class mapRoutingModule {
  static routes = admin;
}
