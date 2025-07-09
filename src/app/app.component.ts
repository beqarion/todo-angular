import { Component } from '@angular/core';

@Component({
  selector: 'todolist-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  newValue = 'a';
  constructor() {}

  onBlaBla() {
    console.log(this.newValue);
  }
}
