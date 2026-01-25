import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
  {path:'',children:[
    {
      path: 'google-map',
      loadComponent: () =>
        import('./google-map/google-map').then(
          (m) => m.GoogleMapComponent
        ),
    },
    {
      path: 'leaflet',
      loadComponent: () =>
        import('./leaflet-maps/leaflet-maps').then(
          (m) => m.LeafletMaps
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
