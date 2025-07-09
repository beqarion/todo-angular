import { Component } from '@angular/core';
import { TodoItem } from './models/todo.model';

@Component({
  selector: 'todolist-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todoItemName = '';
  todoList: TodoItem[] = [];
  idCounter = 0;
  constructor() {}

  onBlaBla() {
    console.log(this.todoItemName);
    this.todoList.push({
      id: this.idCounter,
      title: this.todoItemName,
      isCompleted: false,
    });
  }

  toggleComplete(item: TodoItem) {
    item.isCompleted = !item.isCompleted;
    console.log(this.todoList);
  }
}
