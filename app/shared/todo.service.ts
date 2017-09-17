import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Todo } from './todo';

/**
 * Для того, чтобы в сервисе иметь возможность использовать другие сервисы,
 *  нужно добавить анотацию с помощью декоратора Injectable
 *    когда TS увидит декоратор у сервиса, он добавит классу дополнительную информацию,
 *      которая потом понадобиться Angular при создании сервиса, это позволить в этот 
 *      сервис внедрить другой сервис, в данном случае сервис 'Http' 
 */
@Injectable()
export class TodoService {
    private apiUrl: string = 'api/todos';
    todos: Todo[] = [];

    constructor(private http: Http) {}

    getTodos(): Promise<Todo[]> {
        return this.http.get(this.apiUrl)
                        .toPromise()
                        .then(response => response.json().data)
                        .then(todos => this.todos = todos)
                        .catch(this.handleError)
    }

    createTodo(title: string) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});
        let todo = new Todo(title);

        this.http.post(this.apiUrl, todo, options)
                 .toPromise()
                 .then(response => response.json().data)
                 .then(todo => this.todos.push(todo))
                 .catch(this.handleError);
    }

    deleteTodo(todo: Todo) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});
        let url = `${this.apiUrl}/${todo.id}`;
        
        this.http.delete(url, options)
                 .toPromise()
                 .then(response => {
                     let index = this.todos.indexOf(todo);

                     if(index > -1) {
                         this.todos.splice(index, 1);
                     }
                 })
                 .catch(this.handleError);
    }

    toggleTodo(todo: Todo) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});
        let url = `${this.apiUrl}/${todo.id}`;
        
        this.http.delete(url, options)
                 .toPromise()
                 .then(response => {
                    todo.completed = !todo.completed;
                 })
                 .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error(error);
        return Promise.reject(error.message || error);
    }
}