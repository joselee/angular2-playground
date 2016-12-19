import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';

@Component({
    selector: 'todo-list',
    template: require('~/todo/todo-list.component.html')
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
    onKeyUp(e: any) {
        if (e.keyCode === 13) {
            this.todos.push(this.newTodo);
            this.resetNewTodo();
        }
    }
    resetNewTodo() {
        this.newTodo = new Todo('', false);
    }
}