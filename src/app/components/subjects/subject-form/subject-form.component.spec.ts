import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormAddItemComponent } from '../../../common/forms/form-add-item/form-add-item.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpLoaderFactory } from 'src/app/app.module';
import { ToIterableByKeyPipe } from '../../../common/pipes/to-iterable-by-key/to-iterable-by-key.pipe';
import { FormsModule } from '@angular/forms';
import { DefaultFieldComponent } from '../../../common/forms/alerts/default-field/default-field.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { jornalReducer } from '../../../store/reducers/jornal.reducer';
import { SubjectFormComponent } from './subject-form.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { DecimalPipe } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

describe('SubjectFormComponent', () => {
  let component: SubjectFormComponent;
  let fixture: ComponentFixture<SubjectFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectFormComponent,  FormAddItemComponent, ToIterableByKeyPipe, DefaultFieldComponent ],
      imports:  [ FormsModule, AlertModule, 
        AngularFirestoreModule,
        HttpClientModule,
        RouterModule.forRoot([]),
        StoreRouterConnectingModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebase),
        StoreModule.forRoot({ 'state': jornalReducer }),
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
    fixture = TestBed.createComponent(SubjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
