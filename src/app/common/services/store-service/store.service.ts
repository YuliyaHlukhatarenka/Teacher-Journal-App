import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/state/jornal.state';
import * as StoreActions from '../../../store/actions';
import { DataService } from '../db-service/data.service';
import { catchError } from 'rxjs/operators';
import { throwError, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private store: Store<AppState>, private dataService: DataService, ) { }

  addStudentToStore(student) {
    this.dataService.addStudentToStorage(student).pipe(catchError(err => {
      throwError(err);
      return of('ok');
    })).subscribe(res => {
      if (res["status"] === "OK") {
        this.store.dispatch(new StoreActions.AddToStore(student, 'students'));
      }
    })
  }

  addSubjectToStore(subject) {
    this.dataService.addSubjectToStorage(subject).pipe(catchError(err => {
      throwError(err);
      return of('ok');
    })).subscribe(res => {
      if (res["status"] === "OK") {
        this.store.dispatch(new StoreActions.AddToStore(subject, 'subject'));
      }
    })
  }

  updateSubjectInStore(subject) {
    this.dataService.deleteSubjectFromLocalStorage(subject._id).pipe(catchError(err => {
      throwError(err);
      return of('ok');
    })).subscribe(res => {
      if (res["status"] === "OK") {
        this.dataService.addSubjectToStorage(subject).pipe(catchError(err => {
          throwError(err);
          return of('ok');
        })).subscribe(res => {
          if (res["status"] === "OK") {
            this.store.dispatch(new StoreActions.UpdateStore(subject, subject._id))
           }
        })
      }
    })

  }

}