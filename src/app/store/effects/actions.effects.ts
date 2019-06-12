import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import * as StudentsActions from '../actions/students.actions';
import * as SubjectsActions from '../actions/subjects.actions';
import { Observable, of } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';
import { DataService } from '../../common/services/data.service';
import { ActionTypes } from '../constants';
@Injectable()
export class ActionsEffects {
  public error: Error;

  constructor(
    private actions$: Actions,
    private dataService: DataService
    ) {
  }

  @Effect()
  public getStudents$: Observable<Action> = this.actions$.pipe(
    ofType<StudentsActions.GetStudents>(ActionTypes.GET_STUDENTS),
    switchMap(() =>
      this.dataService
        .getStudentsFromStorage()
        .pipe(map(data => new StudentsActions.GetStudentsSuccess(data)),
              catchError(error => of(new StudentsActions.GetStudentsError(error))),
        )
    )
  );

  @Effect()
  public getSubjects$: Observable<Action> = this.actions$.pipe(
    ofType<SubjectsActions.GetSubjects>(ActionTypes.GET_SUBJECTS),
    switchMap(() =>
      this.dataService
        .getSubjectsFromStorage()
        .pipe(map(data => new SubjectsActions.GetSubjectsSuccess(data)),
              catchError(error => of(new SubjectsActions.GetSubjectsError(error))),
        )
    )
  );

  @Effect()
  public updateSubject$: Observable<Action> = this.actions$.pipe(
    ofType<SubjectsActions.UpdateSubject>(ActionTypes.UPDATE_SUBJECT),
    switchMap((action: SubjectsActions.UpdateSubject) =>
      this.dataService
        .updateSubjectInStore(action.payload)
        .pipe(map(() => new SubjectsActions.UpdateSubjectSuccess(action.payload)),
              catchError(error => of(new SubjectsActions.UpdateSubjectError(error))),
        )
    )
  );

  @Effect()
  public addSubject$: Observable<Action> = this.actions$.pipe(
    ofType<SubjectsActions.AddSubject>(ActionTypes.ADD_SUBJECT),
    switchMap((action: SubjectsActions.AddSubject) =>
      this.dataService
        .addSubjectToStorage(action.payload)
        .pipe(map(() => new SubjectsActions.AddSubjectSuccess(action.payload)),
              catchError(error => of(new SubjectsActions.AddSubjectError(error))),
        )
    )
  );

  @Effect()
  public addStudent$: Observable<Action> = this.actions$.pipe(
    ofType<StudentsActions.AddStudent>(ActionTypes.ADD_STUDENT),
    switchMap((action: StudentsActions.AddStudent) =>
      this.dataService
        .addStudentToStorage(action.payload)
        .pipe(map(() => new StudentsActions.AddStudentSuccess(action.payload)),
              catchError(error => of(new StudentsActions.AddStudentError(error))),
        )
    )
  );
}
