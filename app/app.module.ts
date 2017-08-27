/**
 * Angular 2 - состоит из модулей.
 * Приложение на Angular 2 тоже являяются модулями.
 *  поэтому первое что необходимо сделать: создать главный модуль приложения.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';  // Модуль 'Браузера', для приложения, работающего в браузере
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

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
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent], // регистрация компонента в модуле приложения
    bootstrap: [AppComponent]     // для запуска приложения используеться AppComponent
})
export class AppModule {

}
