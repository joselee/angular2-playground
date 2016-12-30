import { TodoService } from './todo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { Todo } from './todo.model';

@Component({
    selector: 'todo-detail',
    template: `<div>You've arrived to the details page of a todo</div>`
})
export class TodoDetailComponent {
    @Input() todo: Todo;
    id: number;

    constructor(private todoService: TodoService,
                private route: ActivatedRoute,
                private router: Router) { }
    ngOnInit() {
        if (!this.todo) {
            this.route
                .params
                .map(params => params['id'])
                .do(id => this.id = +id)
                .subscribe(id => this.getTodo());
        }
    }

    private getTodo() {
        this.todoService.getTodo(Number(this.id))
            .subscribe(todo => {this.todo = todo});
    }
}