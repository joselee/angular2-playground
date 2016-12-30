import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoListComponent } from './todo/todo-list.component';
import { TodoDetailComponent } from './todo/todo-detail.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: TodoListComponent },
    { path: 'todos/:id', component: TodoDetailComponent },
    { path: '**', pathMatch: 'full', component: TodoListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouterModule { }