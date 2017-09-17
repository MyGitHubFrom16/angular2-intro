/* что-бы указать Angular что компонент будет принимать свойство.
    нужно использовать декоратор Input, выходные Output,
    свойство помеченное декоратором Output, должно быть определенного типа, это должен быть
    экземпляр класса EventEmitter, кдасс EventEmitter предназначен для создания объектов,
    способных генерировать события, так же эти объекты предоставляют интерфейс для подписки на эти события.
    таким образом в свойстве delete будет храниться не функция, а объект, кот. будет генерировать события.

    методу delete в родительском компоненте нужно передать задачу, кот. нужно удалить из списка,
    передать ланные от родителя к ребенку можно несколькими способами,
    - во 1х можно передать из HTML(т.к.в шаблоне доступна локальная переменная todo) можно её отправить в метод delete
    - перелать объект задачи можно и через EventEmitter, далее в HTML в указанный метод нужно передать $event,
        для того что бы Angular передал в метод обработчик, передаваемый в метод emit, аргумент.  
*/
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../shared/todo';

@Component({
    moduleId: module.id,
    selector: 'todo-item',
    templateUrl:'todo-item.component.html', 
    styleUrls: ['todo-item.component.css']
})
export class TodoItemComponent {
    @Input() todo: Todo;
    @Output() delete: EventEmitter<{}> = new EventEmitter();
    @Output() toggle: EventEmitter<{}> = new EventEmitter();

    onToggle() {
        this.toggle.emit(this.todo);
    }

    onDelete() {
        this.delete.emit(this.todo);
    }
}