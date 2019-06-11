import { Action } from '@ngrx/store';
 
export enum ActionTypes {
  Add = '[Jornal Component] Add',
  Delete = '[Jornal Component] Delete',
  Reset = '[Jornal Component] Reset',
}
 
export class Add implements Action {
  readonly type = ActionTypes.Add;
}
 
export class Decrement implements Action {
  readonly type = ActionTypes.Delete;
}
 
export class Reset implements Action {
  readonly type = ActionTypes.Reset;
}