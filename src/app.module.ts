import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo/todo-list.component';
import { TodoItemComponent } from './todo/todo-item.component';
import { TodoDetailComponent } from './todo/todo-detail.component';
import { TodoFilter } from './todo/todo-filter.pipe';
import { TodoService } from './todo/todo.service';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot()
    ],
    declarations: [
        AppComponent,
        TodoListComponent,
        TodoItemComponent,
        TodoFilter,
        TodoDetailComponent
    ],
    providers: [TodoService],
    bootstrap: [AppComponent]
})
export class AppModule { }
