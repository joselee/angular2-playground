import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo';

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
})
export class TodoListComponent implements OnInit {
    todos: Todo[];

    constructor(private todoService: TodoService) { }

    ngOnInit() {
        this.todos = this.todoService.getTodos();
    }
}