/**
 * Angular 2 - состоит из модулей.
 * Приложение на Angular 2 тоже являяются модулями.
 *  поэтому первое что необходимо сделать: создать главный модуль приложения.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';  // Модуль 'Браузера', для приложения, работающего в браузере
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

import { TodoService } from './shared/todo.service';

/**
 * что бы указать Angular, что этот класс будет основным модулем приложения,
 *  нужно добавить 'анотоцию', анотации добавляются с помощью декораторов.
 * Декораторы - это специальные функции, которые добавляют 'мета-информацию' классам.
 *  под 'мета-информацией' подразумевается информация о какой либо другой информации. 
 * Декораторы - похожи на 'анотации' из C Sharp и Java, пока имеются в TypeScript, но и скоро в JS.
 * 
 * NgModule() - декоратор  указывает Angular что класс 'AppModule' являеться модулем. 
*/
@NgModule({
    // импортирование модулей в модуле приложения
    imports: [
        BrowserModule,
        FormsModule
    ],
    // регистрация компонента в модуле приложения
    declarations: [
        AppComponent,
        TodoFormComponent,
        TodoListComponent,
        TodoItemComponent
    ],
    // регистрация сервиса в модуле приложения
    providers: [TodoService],
    // для запуска приложения используеться AppComponent
    bootstrap: [AppComponent]
})
export class AppModule {

}
