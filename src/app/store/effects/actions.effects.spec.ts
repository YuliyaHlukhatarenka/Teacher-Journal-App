import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { EffectsModule } from '@ngrx/effects';
import { ActionsEffects } from '../effects/actions.effects';
import { Actions } from '@ngrx/effects';
import { GetDataFromStoreSrvice } from 'src/app/common/services/get-data-from-store.service';
import { StoreModule } from '@ngrx/store';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { subjectsReducer } from '../../store/reducers/subjects.reducer';
import { studentsReducer } from '../../store/reducers/students.reducer';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';

describe('ActionsEffects', () => {
  let effects: ActionsEffects;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        EffectsModule.forRoot([ActionsEffects]),
        StoreModule.forRoot({ 'studentsState': studentsReducer, 'subjectsState': subjectsReducer }),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        StoreRouterConnectingModule.forRoot(),
        HttpClientModule,
        RouterModule.forRoot([]),
      ],
      providers: [
        GetDataFromStoreSrvice,
        { provide: FirestoreSettingsToken, useValue: {} }
      ],
    });

    effects = TestBed.get(ActionsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
