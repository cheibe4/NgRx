import { createReducer, on } from "@ngrx/store";
import { initialState } from "./counter.state";
import { customInc, decrement, increment, reset, toggleCustomInput } from "./counter.actions";

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({
    ...state,
    counter: state.counter + 1
  })),
    on(decrement, (state) => ({
    ...state,
    counter: state.counter - 1
  })),
    on(reset, () => ({
      counter: 0
  })),
  on(customInc, (state, action) => ({
    ...state,
    counter: state.counter + action.value
  })),
  on(toggleCustomInput, state => ({
    ...state,
    toggle: !state.toggle
  }))
)