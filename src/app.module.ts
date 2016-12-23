import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { MaterialModule } from '@angular/material';
import { MaterialModule } from '@angular/material/bundles/material.umd';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo/todo-list.component';

@NgModule({
    imports: [ BrowserModule, FormsModule, MaterialModule.forRoot() ],
    declarations: [ AppComponent, TodoListComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
