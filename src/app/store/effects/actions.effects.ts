import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as StoreActions from '../../store/actions';
import { Observable, of } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';
import { DataService } from '../../common/services/db-service/data.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state/jornal.state';


@Injectable()
export class ActionsEffects {
  error: any;
  constructor(
    private actions$: Actions,
    private dataService: DataService,
    private store: Store<AppState>,
  ) {
  }

  @Effect()
  getStudents$: Observable<Action> = this.actions$.pipe(
    ofType<StoreActions.GetStudents>(StoreActions.ActionTypes.GET_STUDENTS),
    switchMap(() =>
      this.dataService
        .getStudentsFromStorage()
        .pipe(map(data => new StoreActions.GetStudentsSuccess(data)),
          catchError(error => of(new StoreActions.GetStudentsError(error))),
        )
    )
  )

  @Effect()
  getSubjects$: Observable<Action> = this.actions$.pipe(
    ofType<StoreActions.GetSubjects>(StoreActions.ActionTypes.GET_SUBJECTS),
    switchMap(() =>
      this.dataService
        .getSubjectsFromStorage()
        .pipe(map(data => new StoreActions.GetSubjectsSuccess(data)),
          catchError(error => of(new StoreActions.GetSubjectsError(error))),
        )
    )
  )
}


