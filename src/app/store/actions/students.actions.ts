import { Action } from '@ngrx/store';
import { ActionTypes } from '../constants';
import { IStudent } from '../../common/entities';

export class AddStudent implements Action {
  public readonly type: string = ActionTypes.ADD_STUDENT;
  constructor( public payload: IStudent ) {}
}

export class AddStudentSuccess implements Action {
  public readonly type: string = ActionTypes.ADD_STUDENT_SUCCESS;
  constructor( public payload: IStudent ) {}
}

export class AddStudentError implements Action {
  public readonly type: string = ActionTypes.ADD_STUDENT_ERROR;
  constructor( public payload: Error ) {}
}

export class GetStudents implements Action {
  public readonly type: string = ActionTypes.GET_STUDENTS;
}

export class GetStudentsSuccess implements Action {
  public readonly type: string = ActionTypes.GET_STUDENTS_SUCCESS;
  constructor( public payload: IStudent[] ) {}
}

export class GetStudentsError implements Action {
  public readonly type: string = ActionTypes.GET_STUDENTS_ERROR;
  constructor( public payload: Error ) {}
}

export type StudentsActions =
  | AddStudent
  | AddStudentSuccess
  | AddStudentError
  | GetStudentsSuccess
  | GetStudentsError;
