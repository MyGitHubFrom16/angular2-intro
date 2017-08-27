/** Компоненты
 * Основной идеей Angular 2, как и большенства современных фреймворкрв, являються компоненты.
 * Компоненты представляют из себя часть пользовательского интерфейса, это может быть:
 *     - что-то маленькое, вроде кнопки,
 *     - что-то среднее, типа виджета погоды,
 *     - или что-то большое - целое приложение
 * в сравнении с Angular JS, компоненты в Angular 2 являються аналогами пользовательских дирректив
 *
 * ...
 * 
 *  Диррективы
 * ^ - можно представить как пользовательские атрибуты HTML, позволяющий добавлять элементам новый функционал.
 *   структурные: - изменяют структуру DOM
 *      *ngFor="" позволяют: добавлять, изменять, удалять - елементы
 *      *ngIf=""  отображает елемент в зависимости от результата выражения
 * 
 *   атрибутные: - предназначены для изменения внешнего вида или поведения DOM елементов, не создают и не удаляют елементы
 *    [ngClass]="" отображает класс в зависимости от результата выражения
 * 
 * ...
 * 
 *  Привязка данных
 * ^ - в Angular 2 есть две разновидности привязки данных: привязка свойств и привязка событий, шаблонные теги{{интерполяция}} - 
 *      являеться упрощенным вариантом привязки к текстовому содержанию елемента, т.к. привяке к свойству: [innerText]=""
 * 
 *      {{ Template expression }}
 *          - Angular выполняет выражение и присваивает его свойству объекта привязки; 
 *          Целью может быть HTML-элемент, компонент или директива.
 * 
 *      Property Binding 
 *          - привязка свойства, можно привязаться к ЛЮБОМУ свойству DOM елемента
 *          у каждого DOM елемента есть набор свойств, пример: в this HTML
 *          [innerText]="properties || expression"
 * 
 *      Event Binding 
 *          - привязка событий, можно привязаться к ЛЮБОМУ событию DOM елемента
 *          у каждого DOM елемента есть набор событий.
 *          в Angular 2 у таких событий как: onclick, onkeyup, onmousemove и др.
 *          в названии отброшен префикс on : click, keyup, mousemove ...
 *          пример: в this HTML
 *          (innerText)="method($event || properties)" в качестве аргумента 
 *                               Template переменная ссылающаяся на нужный объект
 */
import { Component } from "@angular/core";

interface ITodo {
    title: string; 
    completed: boolean;
};

const todos: ITodo[] = [
    {
        title: 'Изучить JavaScript',
        completed: true
    },
    {
        title: 'Изучить Angullar 2',
        completed: false
    },
    {
        title: 'Написать приложение',
        completed: false
    }
];

@Component({
    moduleId: module.id,
    selector: 'app', // <app></app>        тег HTML
    templateUrl:'app.component.html',   // template:'<h1>AngulAR 2do</h1>', 
    styleUrls: ['app.component.css']    // styles: `header { background: #232323; }`
})
export class AppComponent {
    title: string = 'Angular 2DO'; // таким образом, добавлять свойства классу можно только в TypeScript
    todos: ITodo[] = todos;

    toggle(todo: ITodo) {
        todo.completed = !todo.completed; // четко :)
    }

    delete(todo: ITodo) {
        let index = this.todos.indexOf(todo);

        if (index > -1) {
            this.todos.splice(index, 1);
        }
    }
}