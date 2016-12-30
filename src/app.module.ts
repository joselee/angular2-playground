import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { TodoListComponent } from './todos/todo-list.component';
import { TodoService } from './todos/todo.service';

import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot()
    ],
    declarations: [
        AppComponent,
        TodoListComponent
    ],
    providers: [TodoService],
    bootstrap: [AppComponent]
})
export class AppModule { }
