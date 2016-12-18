export class Todo {
    constructor (public name: string,
                 public done: boolean,
                 public description?: string,
                 public doneDate?: Date) {}
}