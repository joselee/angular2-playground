import {Component, OnInit} from '@angular/core';
import {Todo} from './todo.model';

@Component({
    selector: 'todo-list',
    styles: [`
        .done {
            text-decoration: line-through;
        }
  `],
    template: 
    `<div class="todo-list">
        <input type="text" placeholder="new todo" [(ngModel)]="newTodo.name" (keyup)="onKeyUp($event)" />
        <div *ngFor="let todo of todos">
            <label>
                <input type="checkbox" [(ngModel)]="todo.done" />
                <span [ngClass]="{done: todo.done}">{{todo.name}}</span>
            </label>
        </div>
     </div>`
})
export class TodoListComponent implements OnInit {
    todos: Todo[];
    newTodo: Todo;

    ngOnInit() {
        this.todos = [
            {
                name: 'foo',
                done: false
            },
            {
                name: 'bar',
                done: false
            },
            {
                name: 'derp',
                done: false
            }
        ];
        this.resetNewTodo();
    }
    onKeyUp(e:any) {
        if(e.keyCode === 13) {
            this.todos.push(this.newTodo);
            this.resetNewTodo();
        }
    }
    resetNewTodo() {
        this.newTodo = new Todo('', false);
    }
}