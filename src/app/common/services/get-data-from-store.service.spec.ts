import { TestBed } from '@angular/core/testing';

import { GetDataFromStoreSrvice } from './get-data-from-store.service';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { jornalReducer } from '../../store/reducers/subjects.reducer';

describe('DataPickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterModule.forRoot([]),
             StoreRouterConnectingModule.forRoot(),
             StoreModule.forRoot({ 'state': jornalReducer }),

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
