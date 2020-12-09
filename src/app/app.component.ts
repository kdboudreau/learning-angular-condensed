import { Component } from '@angular/core';

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
    this.number = this.number * 2;
  }
}
