import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../states/counter.state';
import { customInc, toggleCustomInput } from '../states/counter.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent implements OnInit, OnDestroy{
  constructor(private store: Store<{counter: CounterState}>){}
  
  customValue : number = 0;
  showCustomInput?: boolean = false;
  toggleSubscription : Subscription | null = null;
  
  ngOnInit() {
    this.toggleSubscription = this.store.select('counter').subscribe(data => {
      this.showCustomInput =  data.toggle;
    })
  }
  
  
  custombtnClicked() {
    this.store.dispatch(customInc({value: +this.customValue}))
  }
  
  toggleClicked() {
    this.store.dispatch(toggleCustomInput());
  }

  ngOnDestroy(): void {
    if(this.toggleSubscription){
      this.toggleSubscription.unsubscribe();
    }
  }
}
