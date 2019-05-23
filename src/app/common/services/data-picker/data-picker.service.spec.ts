import { TestBed } from '@angular/core/testing';

import { DataPickerService } from './data-picker.service';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { jornalReducer } from '../../../store/reducers/jornal.reducer';



describe('DataPickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterModule.forRoot([]),
             StoreRouterConnectingModule.forRoot(),
             StoreModule.forRoot({ 'state': jornalReducer }),

  ],
    providers: [
       DataPickerService,
    ],
  }));

  it('should be created', () => {
    const service: DataPickerService = TestBed.get(DataPickerService);
    expect(service).toBeTruthy();
  });
});
