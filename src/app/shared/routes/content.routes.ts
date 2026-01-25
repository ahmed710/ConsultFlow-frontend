import {Routes} from '@angular/router';


export const Full_Content_Routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../../components/dashboards/dashboards.routes').then(r => r.dashboardRoutingModule)
  },
  {
    path: '',
    loadChildren: () => import('../../components/applications/applications.routes').then(r => r.applicationRoutingModule)
  },
  {
    path: 'maps',
    loadChildren: () => import('../../components/map/map.route').then(r => r.mapRoutingModule)
  },
];
