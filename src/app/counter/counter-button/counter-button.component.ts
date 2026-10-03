import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css'],
})
export class CounterButtonComponent {
  @Output()
  incClicked: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  decClicked: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  resClicked: EventEmitter<void> = new EventEmitter<void>();

  onIncrement() {
    this.incClicked.emit();
  }

  onDecrement() {
    this.decClicked.emit();
  }

  onReset() {
    this.resClicked.emit();
  }
}
