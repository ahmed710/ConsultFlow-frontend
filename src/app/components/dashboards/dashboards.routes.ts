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
       path: 'projects/project-overview',
       loadComponent: () =>
         import('./projects/project-overview/project-overview').then((m) => m.ProjectOverview),
     },
     {
       path: 'projects/create-project',
       loadComponent: () =>
         import('./projects/create-project/create-project').then((m) => m.CreateProject),
     },
   {
  path: 'sales',
  loadComponent: () =>
    import('./sales/sales').then((m) => m.Sales),
},
{
  path: 'analytics',
  loadComponent: () =>
    import('./analytics/analytics').then(
      (m) => m.Analytics
    ),
},

{
  path: 'crm/dashboard',
  loadComponent: () =>
    import('./crm/dashboard/dashboard').then((m) => m.Dashboard),
},
{
  path: 'crm/contacts',
  loadComponent: () =>
    import('./crm/contacts/contacts').then((m) => m.Contacts),
},
{
  path: 'crm/companies',
  loadComponent: () =>
    import('./crm/companies/companies').then((m) => m.Companies),
},
{
  path: 'crm/deals',
  loadComponent: () =>
    import('./crm/deals/deals').then((m) => m.Deals),
},
{
  path: 'crm/leads',
  loadComponent: () =>
    import('./crm/leads/leads').then((m) => m.Leads),
},

{
  path: 'hrm',
  loadComponent: () =>
    import('./hrm/hrm').then((m) => m.Hrm),
},
{
  path: 'jobs/dashboard',
  loadComponent: () =>
    import('./jobs/dashboard/dashboard').then((m) => m.Dashboard),
},
{
  path: 'jobs/job-details',
  loadComponent: () =>
    import('./jobs/job-details/job-details').then((m) => m.JobDetails),
},
{
  path: 'jobs/search-company',
  loadComponent: () =>
    import('./jobs/search-company/search-company').then((m) => m.SearchCompany),
},
{
  path: 'jobs/search-jobs',
  loadComponent: () =>
    import('./jobs/search-jobs/search-jobs').then((m) => m.SearchJobs),
},
{
  path: 'jobs/dashboard',
  loadComponent: () =>
    import('./jobs/dashboard/dashboard').then((m) => m.Dashboard),
},
{
  path: 'jobs/job-post',
  loadComponent: () =>
    import('./jobs/job-post/job-post').then((m) => m.JobPost),
},
{
  path: 'jobs/jobs-list',
  loadComponent: () =>
    import('./jobs/jobs-list/jobs-list').then((m) => m.JobsList),
},
{
  path: 'jobs/search-candidates',
  loadComponent: () =>
    import('./jobs/search-candidate/search-candidate').then((m) => m.SearchCandidate),
},
{
  path: 'jobs/candidate-details',
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
