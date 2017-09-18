import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

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

    constructor(private http: Http) {}

    getTodos(): Observable<Todo[]> {
        return this.http.get(this.apiUrl)
                        .map(response => response.json().data)
                        .catch(this.handleError)
    }

    createTodo(title: string): Observable<Todo> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});
        let todo = new Todo(title);

        return this.http.post(this.apiUrl, todo, options)
                        .map(response => response.json().data)
                        .catch(this.handleError);
    }

    deleteTodo(todo: Todo): Observable<Todo> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});
        let url = `${this.apiUrl}/${todo.id}`;
        
        return this.http.delete(url, options)
                        .catch(this.handleError);
    }

    toggleTodo(todo: Todo): Observable<Todo> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});
        let url = `${this.apiUrl}/${todo.id}`;
        
        return this.http.delete(url, options)
                        .catch(this.handleError);
    }

    private handleError(error: any): Observable<Todo> {
        console.error(error);
        return Observable.throw(error.message || error);
    }
}