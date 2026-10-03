import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {

  counter : number = 0;

  resetCount() {
    this.counter = 0;
  }
  decrementCount() {
    this.counter--;
  }
  incrementCount() {
    this.counter++;
  }
}
