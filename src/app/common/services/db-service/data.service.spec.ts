import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { jornalReducer } from '../../../store/reducers/jornal.reducer';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';


describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [AngularFirestoreModule,
      HttpClientModule,
      RouterModule.forRoot([]),
      StoreRouterConnectingModule.forRoot(),
      StoreModule.forRoot({ 'state': jornalReducer }),
      AngularFireModule.initializeApp(environment.firebase),

],
    providers: [
      DataService,
      { provide: FirestoreSettingsToken, useValue: {} }
    ],
  }));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
});
