import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  // template: '<p>Hello</p>',
  template: `
    <input type="text" (input)="onUserInput($event)">
    <p>Hello {{ name }}!</p>
    <p>I'm the user component</p>
  `
})
export class UserComponent {
  name = 'Kat';

  onUserInput(event) {
    this.name = event.target.value
  }
}
