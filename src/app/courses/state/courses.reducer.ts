import { createReducer } from "@ngrx/store";
import { InitialState } from "./courses.state";

export const coursesReducer = createReducer(
  InitialState
)