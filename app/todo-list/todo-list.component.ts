import { Component, OnInit } from '@angular/core';

import { Todo } from '../shared/todo';
import { TodoService } from '../shared/todo.service';

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl:'todo-list.component.html', 
    styleUrls: ['todo-list.component.css']
})
export class TodoListComponent implements OnInit {
    todos: Todo[];

    // dependency injection
    constructor(private todoService: TodoService) {
        this.todos = [];
    }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.todoService.getTodos().then(todos => this.todos = todos);
    }

    delete(todo: Todo) {
        this.todoService.deleteTodo(todo);
    }

    toggle(todo: Todo) {
        this.todoService.toggleTodo(todo);
    }
}