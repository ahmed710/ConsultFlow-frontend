import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
export const landing: Routes = [
    {path:'pages',children:[
        {
            path: 'landing',
            loadComponent: () =>
              import('./landing/landing').then((m) => m.Landing),
          }
    ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(landing)],
    exports: [RouterModule],
  })
  export class landingRoutingModule {
    static routes = landing;
  }
