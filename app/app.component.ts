/** Компоненты
 * Основной идеей Angular 2, как и большенства современных фреймворкрв, являються компоненты.
 * Компоненты представляют из себя часть пользовательского интерфейса, это может быть:
 *     - что-то маленькое, вроде кнопки,
 *     - что-то среднее, типа виджета погоды,
 *     - или что-то большое - целое приложение
 * в сравнении с Angular JS, компоненты в Angular 2 являються аналогами пользовательских дирректив
 */
import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'app', // <app></app>        тег HTML
    templateUrl:'app.component.html',   // template:'<h1>AngulAR 2do</h1>', 
    styleUrls: ['app.component.css']    // styles: `header { background: #232323; }`
})
export class AppComponent {
    title = 'Angular 2DO'; // таким образом, добавлять свойства классу можно только в TypeScript
}