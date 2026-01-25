import { Routes } from "@angular/router";

export const Authentication_ROUTES:Routes = [{
  
   path: '', children: [
    {
        path: '',
        loadChildren: () => import('../../../app/components/pages/authentication/authentication.route').then(r => r.authenticationRoutingModule)
      },
      {
        path: '',
        loadChildren: () => import('../../../app/components/pages/error/error.route').then(r => r.errorRoutingModule)
      },
      {
        path: '',
        loadChildren: () => import('../../../app/components/pages/landing.route').then(r => r.landingRoutingModule)
      },

]
}]
