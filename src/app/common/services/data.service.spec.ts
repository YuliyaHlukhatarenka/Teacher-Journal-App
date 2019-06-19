import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { subjectsReducer } from '../../store/reducers/subjects.reducer';
import { studentsReducer } from '../../store/reducers/students.reducer';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStudent } from '../entities';

describe('DataService', () => {
  let service: DataService;
  let httpSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularFirestoreModule,
        HttpClientModule,
        RouterModule.forRoot([]),
        StoreRouterConnectingModule.forRoot(),
        StoreModule.forRoot({ 'studentsState': studentsReducer, 'subjectsState': subjectsReducer }),
        AngularFireModule.initializeApp(environment.firebase),
      ],
      providers: [
        DataService,
        { provide: FirestoreSettingsToken, useValue: {} }
      ],
    });
    service = TestBed.get(DataService);
    httpSpy = TestBed.get(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
