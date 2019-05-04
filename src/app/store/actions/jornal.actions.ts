import { Action } from '@ngrx/store';
 
export enum ActionTypes {
  INIT_STORE = 'INIT_STORE',
  UPDATE_STORE = 'UPDATE_STORE',
  ADD_TO_STORE = 'ADD_TO_STORE',
  GET_STUDENTS = 'GET_STUDENTS',
  GET_STUDENTS_SUCCESS = 'GET_STUDENTS_SUCCESS',
  GET_STUDENTS_ERROR = 'GET_STUDENTS_ERROR',
  GET_SUBJECTS = 'GET_SUBJECTS',
  GET_SUBJECTS_SUCCESS = 'GET_SUBJECTS_SUCCESS',
  GET_SUBJECTS_ERROR = 'GET_SUBJECTS_SUCCESS'
}
 
export class InitStore implements Action {
  readonly type = ActionTypes.INIT_STORE;
  constructor( public payload ) {}
}

export class UpdateStore implements Action {
  readonly type = ActionTypes.UPDATE_STORE;
  constructor( public payload, public itemToUpdate: string ) {}
}

export class AddToStore implements Action {
  readonly type = ActionTypes.ADD_TO_STORE;
  constructor( public payload, public itemToAdd: string ) {}
}

export class GetStudents implements Action {
  readonly type = ActionTypes.GET_STUDENTS;
}

export class GetStudentsSuccess implements Action {
  readonly type = ActionTypes.GET_STUDENTS_SUCCESS;
  constructor( public payload ) {}
}

export class GetStudentsError implements Action {
  readonly type = ActionTypes.GET_STUDENTS_ERROR;
  constructor( public payload: Error | string ) {}
}

export class GetSubjects implements Action {
  readonly type = ActionTypes.GET_SUBJECTS;
}
 
export class GetSubjectsSuccess implements Action {
  readonly type = ActionTypes.GET_SUBJECTS_SUCCESS;
  constructor( public payload ) {}
}

export class GetSubjectsError implements Action {
  readonly type = ActionTypes.GET_SUBJECTS_ERROR;
  constructor( public payload: Error | string ) {}
}

export type AppActions = 
  GetStudents
  | InitStore
  | UpdateStore
  | AddToStore
  | GetStudentsSuccess
  | GetStudentsError
  | GetSubjectsSuccess
  | GetSubjectsError
  | GetSubjects

