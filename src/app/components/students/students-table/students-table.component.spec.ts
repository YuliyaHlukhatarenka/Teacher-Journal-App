import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormAddItemComponent } from '../../../common/forms/form-add-item/form-add-item.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpLoaderFactory } from 'src/app/app.module';
import { ToIterableByKeyPipe } from '../../../common/pipes/to-iterable-by-key/to-iterable-by-key.pipe';
import { FormsModule } from '@angular/forms';
import { DefaultFieldComponent } from '../../../common/forms/form-add-item/default-field/default-field.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { jornalReducer } from '../../../store/reducers/subjects.reducer';
import { AngularFirestoreModule } from '@angular/fire/firestore';


import { StudentsComponent } from './students-table.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('StudentsComponent', () => {
  let component: StudentsComponent;
  let fixture: ComponentFixture<StudentsComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsComponent,  FormAddItemComponent, ToIterableByKeyPipe, DefaultFieldComponent ],
      imports:  [ FormsModule, AlertModule, 
        HttpClientModule,
        AngularFirestoreModule,
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
    fixture = TestBed.createComponent(StudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open Add new student page', () => {
    component.openAddNewStudentPage();
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('p'));
    el = de.nativeElement;
    expect(el.textContent).toEqual('Add new student:');
  });
});
