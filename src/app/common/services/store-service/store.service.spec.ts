import { TestBed } from '@angular/core/testing';

import { StoreService } from './store.service';
import { DataPickerService } from '../data-picker/data-picker.service';
import { FirestoreSettingsToken } from '@angular/fire/firestore';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { jornalReducer } from '../../../store/reducers/jornal.reducer';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';

describe('StoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterModule.forRoot([]),
      AngularFirestoreModule,
      HttpClientModule,
      StoreRouterConnectingModule.forRoot(),
      StoreModule.forRoot({ 'state': jornalReducer }),
      AngularFireModule.initializeApp(environment.firebase),
],
    providers: [
      DataPickerService,
      { provide: FirestoreSettingsToken, useValue: {} }
    ],
  }));

  it('should be created', () => {
    const service: StoreService = TestBed.get(StoreService);
    expect(service).toBeTruthy();
  });
});
