import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoService {
    getTodos() {
        return [
            new Todo('foo'),
            new Todo('bar'),
            new Todo('hey', true),
            new Todo('wat')
        ];
    }
}