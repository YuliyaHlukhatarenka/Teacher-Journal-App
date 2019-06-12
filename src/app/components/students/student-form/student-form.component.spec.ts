import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormAddItemComponent } from '../../../common/forms/form-add-item/form-add-item.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpLoaderFactory } from 'src/app/app.module';
import { ToIterableByKeyPipe } from '../../../common/pipes/to-iterable-by-key/to-iterable-by-key.pipe';
import { FormsModule } from '@angular/forms';
import { DefaultFieldComponent } from '../../../common/forms/form-add-item/default-field/default-field.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import {  StudentFormComponent } from './student-form.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { jornalReducer } from '../../../store/reducers/subjects.reducer';
import { RouterModule } from '@angular/router';
import { DebugElement } from '@angular/core';

describe(' StudentFormComponent', () => {
  let component: StudentFormComponent;
  let fixture: ComponentFixture< StudentFormComponent>;
  let de: DebugElement[];
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  StudentFormComponent, FormAddItemComponent, ToIterableByKeyPipe, DefaultFieldComponent ],
      imports:  [ FormsModule, AlertModule,
        AngularFirestoreModule,
        HttpClientModule,
        RouterModule.forRoot([]),
        StoreRouterConnectingModule.forRoot(),
        StoreModule.forRoot({ 'state': jornalReducer }),
        AngularFireModule.initializeApp(environment.firebase),
        TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }) ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( StudentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
