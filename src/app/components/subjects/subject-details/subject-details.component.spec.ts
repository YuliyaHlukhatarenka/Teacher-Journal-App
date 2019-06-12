import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormAddItemComponent } from '../../../common/forms/form-add-item/form-add-item.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpLoaderFactory } from 'src/app/app.module';
import { ToIterableByKeyPipe } from '../../../common/pipes/to-iterable-by-key/to-iterable-by-key.pipe';
import { FormsModule } from '@angular/forms';
import { DefaultFieldComponent } from '../../../common/forms/form-add-item/default-field/default-field.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { RouterModule } from '@angular/router';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ActionsEffects } from 'src/app/store/effects/actions.effects';
import { StoreModule } from '@ngrx/store';
import { subjectsReducer } from '../../../store/reducers/subjects.reducer';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SubjectDetailsComponent } from './subject-details.component';
import { DecimalPipe } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../store/state/app.state';

describe('SubjectDetailsComponent', () => {
  let component: SubjectDetailsComponent;
  let fixture: ComponentFixture<SubjectDetailsComponent>;
  let store: Store<IAppState>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectDetailsComponent, FormAddItemComponent, ToIterableByKeyPipe, DefaultFieldComponent],
      imports: [FormsModule, AlertModule,
        StoreModule.forRoot({ 'state': subjectsReducer }),
        AngularFirestoreModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forRoot([]),
        StoreRouterConnectingModule.forRoot(),
        EffectsModule.forRoot([ActionsEffects]),
        AngularFireModule.initializeApp(environment.firebase),
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })],
      providers: [
        DecimalPipe,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectDetailsComponent);
    component = fixture.componentInstance;
    component.title = 'Literature';
    fixture.detectChanges();
  });
});
