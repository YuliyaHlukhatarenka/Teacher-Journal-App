import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../../store/state';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataFromStoreSrvice {

  constructor(private store: Store<IAppState>) { }

  public getDataFromStore(): Observable<IAppState> {
    return  this.store.pipe(select('state'));
  }
}
