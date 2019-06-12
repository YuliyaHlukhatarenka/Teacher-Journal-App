import { Action } from '@ngrx/store';
import { ISubject } from '../../common/entities';
import { ActionTypes } from '../constants';

export class UpdateSubject implements Action {
  public readonly type: string = ActionTypes.UPDATE_SUBJECT;
  constructor( public payload: ISubject ) {}
}

export class UpdateSubjectSuccess implements Action {
  public readonly type: string = ActionTypes.UPDATE_SUBJECT_SUCCESS;
  constructor( public payload: ISubject) {}
}

export class UpdateSubjectError implements Action {
  public readonly type: string = ActionTypes.UPDATE_SUBJECT_ERROR;
  constructor( public payload: Error ) {}
}

export class AddSubject implements Action {
  public readonly type: string = ActionTypes.ADD_SUBJECT;
  constructor( public payload: ISubject ) {}
}

export class AddSubjectSuccess implements Action {
  public readonly type: string = ActionTypes.ADD_SUBJECT_SUCCESS;
  constructor( public payload: ISubject ) {}
}

export class AddSubjectError implements Action {
  public readonly type: string = ActionTypes.ADD_SUBJECT_ERROR;
  constructor( public payload: Error ) {}
}

export class GetSubjects implements Action {
  public readonly type: string = ActionTypes.GET_SUBJECTS;
}

export class GetSubjectsSuccess implements Action {
  public readonly type: string = ActionTypes.GET_SUBJECTS_SUCCESS;
  constructor( public payload: ISubject[] ) {}
}

export class GetSubjectsError implements Action {
  public readonly type: string = ActionTypes.GET_SUBJECTS_ERROR;
  constructor( public payload: Error ) {}
}

export type SubjectsActions =
  | UpdateSubject
  | UpdateSubjectSuccess
  | UpdateSubjectError
  | AddSubject
  | AddSubjectSuccess
  | AddSubjectError
  | GetSubjectsSuccess
  | GetSubjectsError;
