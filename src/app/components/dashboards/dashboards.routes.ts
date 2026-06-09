import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'dashboards',children:[
     {
       path: 'projects/dashboard',
       loadComponent: () =>
         import('./projects/dashboard/dashboard').then((m) => m.Dashboard),
     },
     {
       path: 'projects/projects-list',
       loadComponent: () =>
         import('./projects/projects-list/projects-list').then((m) => m.ProjectsList),
     },
   {
          path: 'projects/create-project',
          loadComponent: () =>
            import('./projects/create-project/create-project').then((m) => m.CreateProject),
        },
     {
       path: 'projects/:id',
       loadComponent: () =>
         import('./projects/project-overview/project-overview').then((m) => m.ProjectOverview),
     },

{
  path: 'hrm',
  loadComponent: () =>
    import('./hrm/hrm').then((m) => m.Hrm),
},
{
  path: 'jobs/search-candidates',
  loadComponent: () =>
    import('./jobs/search-candidate/search-candidate').then((m) => m.SearchCandidate),
},
{
  path: 'jobs/candidate-details/:id',
  loadComponent: () =>
    import('./jobs/candidate-details/candidate-details').then((m) => m.CandidateDetails),
},

]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class dashboardRoutingModule {
  static routes = admin;
}
