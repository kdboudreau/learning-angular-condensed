import { Component } from '@angular/core';
// import 'lodash';
import { random } from 'lodash';

// declare var _: any;
  // on compile get error because it cant find lodash symbol since it isnt a variable or property we defined.
  // so we declare a variable here so we can access it



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-essentials';
  rootName = 'Kat';
  number = 0;

  onNameChanged(newName) {
    this.rootName = newName;
  }

  rootItems = ['Apples', 'Bananas', 'Cherries'];

  onItemWasAdded(newItem) {
    this.rootItems.push(newItem);
    console.log(this.rootItems);
  }

  onIncrease() {
    // this.number = this.number * 2;
    this.number = random(1, 10);
  }
}
