import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl:'todo-form.component.html', 
    styleUrls: ['todo-form.component.css']
})
export class TodoFormComponent {
    // # Сброс значения инпута #3 
    /**
     * идеальным бы выриантом было бы, в классе иметь свойство для названия новой задачи,
     *  и в шаблоне привязать значение поля к этому свойству.
     *  таким образом, при обновлении значения поля - значение свойства так же обновляеться.
     *  далее, после добавления задачи в массив, свойству в классе присваиваем пустую строку,
     *  и как следствие - это отображаеться на странице
     *  все это сделать поможет модуль для работы с формами
     *
     * после импортирования модуля FormsModule, в шаблонах теперь доступно несколько новах дирректив.
     *  напр: [(ngModel)]="" - с пом. кот. осуществляеться привязка данных
     */
    title: string = '';
    @Output() add = new EventEmitter();

    onSubmit() {
        this.add.emit(this.title);
    }

   /**
     * create() {
     *     let todo: Todo = new Todo(this.newTodoTitle);
     *     this.todos.push(todo);
     *     this.newTodoTitle = '';
     * }
     * 
     * // # Сброс значения инпута #1
     * create(event: Event, input: HTMLInputElement) {
     *     event.preventDefault();
     *     let todo: Todo = new Todo(input);
     *     this.todos.push(todo);
     *     input.value = ''; // минусом этого способа являеться тот факт, что мы в классе имеем дело с DOM елементом,
     *                       //  мешать логику и манипулирование DOM не рекомендуется
     * }
     *      
     */
}