import { Action } from '@ngrx/store';
import { ActionTypes } from './jornal.actions';
 
export const initialState = 0;
 
export function counterReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.Add:
      return state + 1;
 
    case ActionTypes.Delete:
      return state - 1;
 
    case ActionTypes.Reset:
      return 0;
 
    default:
      return state;
  }
}