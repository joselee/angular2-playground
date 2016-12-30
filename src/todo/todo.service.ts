import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoService {
    constructor(private http: Http) { }

    getTodos() {
        return this.http
            .get('api/todos.json')
            .map((response: Response) => <Todo[]>response.json())
            .catch(this.handleError);
    }

    getTodo(id: number) {
        return this.http
            .get('api/todos.json')
            .map((response: Response) => <Todo[]>response.json())
            .do(todos => todos[id])
            .catch(this.handleError);
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(`Error status code ${error.status} at ${error.url}`);
    }
}