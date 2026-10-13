import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getCounter } from '../states/counter.selectors';
import { CounterState } from '../states/counter.state';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-counter-value',
  templateUrl: './counter-value.component.html',
  styleUrls: ['./counter-value.component.css']
})
export class CounterValueComponent implements OnInit {

  constructor(private store: Store<AppState>){}

  counter$: Observable<number> | null = null;


  ngOnInit(){
    this.counter$ = this.store.select(getCounter)
  }

}
