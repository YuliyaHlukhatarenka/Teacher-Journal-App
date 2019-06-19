import { TestBed } from '@angular/core/testing';

import { GetDataFromStoreSrvice } from './get-data-from-store.service';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { subjectsReducer } from '../../store/reducers/subjects.reducer';
import { studentsReducer } from '../../store/reducers/students.reducer';

describe('DataPickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterModule.forRoot([]),
             StoreRouterConnectingModule.forRoot(),
             StoreModule.forRoot({ 'studentsState': studentsReducer, 'subjectsState': subjectsReducer }),

  ],
    providers: [
      GetDataFromStoreSrvice,
    ],
  }));

  it('should be created', () => {
    const service: GetDataFromStoreSrvice = TestBed.get(GetDataFromStoreSrvice);
    expect(service).toBeTruthy();
  });
});
