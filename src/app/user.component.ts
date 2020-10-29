import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  // template: '<p>Hello</p>',
  template: `
    <p>Hello {{ name }}!</p>
    <p>I'm the user component</p>
  `
})
export class UserComponent {
  name = 'Kat';
}
