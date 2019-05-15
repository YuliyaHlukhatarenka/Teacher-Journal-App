import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../store/state/jornal.state';

@Injectable({
  providedIn: 'root'
})
export class DataPickerService {


  constructor(private store: Store<AppState>) { }

  getDataForPicker() {
    let result;
    this.store.pipe(select('state')).subscribe(res => result = res.subjects);
    return result;
  }


}