import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { ActionsEffects } from '../effects/actions.effects';
import { DataPickerService } from 'src/app/common/services/data-picker/data-picker.service';
import { StoreModule } from '@ngrx/store';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { jornalReducer } from '../reducers/jornal.reducer';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule } from '@angular/router';


describe('ActionsEffects', () => {
  let actions$: Observable<any>;
  let effects: ActionsEffects;

 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        EffectsModule.forRoot([ActionsEffects]),
        StoreModule.forRoot({ 'state': jornalReducer }),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        StoreRouterConnectingModule.forRoot(),
        HttpClientModule,     
        RouterModule.forRoot([]), 
      ],
      providers: [
        DataPickerService,
        { provide: FirestoreSettingsToken, useValue: {} }
      ],
    });

    effects = TestBed.get(ActionsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
