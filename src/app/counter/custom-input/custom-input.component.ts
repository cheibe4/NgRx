import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../states/counter.state';
import { customInc, toggleCustomInput } from '../states/counter.actions';
import { Observable, Subscription } from 'rxjs';
import { getToggle } from '../states/counter.selectors';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent implements OnInit{
  constructor(private store: Store<AppState>){}
  
  customValue : number = 0;
  showCustomInput$: Observable<boolean> | null = null;
  
  ngOnInit() {
    this.showCustomInput$ = this.store.select(getToggle);
  }
  
  
  custombtnClicked() {
    this.store.dispatch(customInc({value: +this.customValue}))
  }
  
  toggleClicked() {
    this.store.dispatch(toggleCustomInput());
  }

}
