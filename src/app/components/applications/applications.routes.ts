import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
  {path:'applications',children:[
      {
        path: 'full-calendar',
        loadComponent: () =>
          import('./full-calendar/full-calendar').then(
            (m) => m.FullCalendar
          ),
      },
      {
        path: 'task/kanban-board',
        loadComponent: () =>
          import('./task/kanban-board/kanban-board').then(
            (m) => m.KanbanBoard
          ),
      },
      {
        path: 'task/list-view',
        loadComponent: () =>
          import('./task/list-view/list-view').then(
            (m) => m.ListView
          ),
      },
      {
        path: 'todo-list',
        loadComponent: () =>
          import('./todo-list/todo-list').then(
            (m) => m.TodoList
          ),
      },
]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class applicationRoutingModule {
  static routes = admin;
}
