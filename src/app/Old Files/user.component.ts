import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <input type="text" (input)="onUserInput($event)" [value]="name">
    <!-- <input type="text" [(ngModel)]="name"> -->
    <p>Hello {{ name }}!</p>
    <p>I'm the user component</p>
    <app-user-detail></app-user-detail>
  `
})
export class UserComponent {
  @Input() name;
  @Output() nameChanged = new EventEmitter<string>(); //chevrons for indicating the type of data we will emit,
    // add parenthisis because were instantiating eventemitter

  onUserInput(event) {
    // this.name = event.target.value;
    this.nameChanged.emit(event.target.value);
  }
}