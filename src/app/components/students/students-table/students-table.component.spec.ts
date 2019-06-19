import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormAddItemComponent } from '../../../common/forms/form-add-item/form-add-item.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpLoaderFactory } from 'src/app/app.module';
import { ToIterableByKeyPipe } from '../../../common/pipes/to-iterable-by-key/to-iterable-by-key.pipe';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';
import { RouterModule, Router } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { studentsReducer } from '../../../store/reducers';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { StudentsComponent } from './students-table.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStudent } from 'src/app/common/entities';
import {  of } from 'rxjs';

@Injectable() export class RouterStub {
  public navigate(): boolean { return true; }
}

describe('StudentsComponent', () => {
  let component: StudentsComponent;
  let fixture: ComponentFixture<StudentsComponent>;
  let elFirstName: HTMLElement, elLastName: HTMLElement, elAddress: HTMLElement;
  let store: Store<IStudent>;
  let router: Router;
  let getDataBySpy: jasmine.Spy;
  let routerSpy: jasmine.Spy;
  let fakeValue: object = of({
    students: [ {
    address: '821 Bassett Avenue, Morningside, Montana, 7666',
    description: 'Description for student Eve',
    firstName: 'Eve',
    lastName: 'Knapp',
    _id: '5ca611e7956d5c92c0304bc7',
    }]
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StudentsComponent, FormAddItemComponent, ToIterableByKeyPipe],
      imports: [FormsModule, AlertModule,
        HttpClientModule,
        AngularFirestoreModule,
       RouterModule.forRoot([]),
        StoreModule.forRoot({ 'studentsState': studentsReducer }),
        AngularFireModule.initializeApp(environment.firebase),
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })],
      providers: [Store,
       { provide: Router, useClass: RouterStub}
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    router = TestBed.get(Router);
    getDataBySpy = spyOn(store, 'select').and.returnValue(fakeValue);
    routerSpy =  spyOn(router, 'navigate');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show Eve Knapp in table', async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      elFirstName = fixture.nativeElement.querySelector('td:nth-of-type(2)');
      elLastName = fixture.nativeElement.querySelector('td:nth-of-type(3)');
      elAddress = fixture.nativeElement.querySelector('td:nth-of-type(4)');
      expect(elFirstName.innerText).toContain('Eve');
      expect(elLastName.innerText).toContain('Knapp');
      expect(elAddress.innerText).toContain('821 Bassett Avenue, Morningside, Montana, 7666');
      expect(getDataBySpy.calls.any()).toBe(true);
    });
  }));

  it('should open Add new students', () => {
    fixture.detectChanges();
    component.openAddNewStudentPage();
    fixture.detectChanges();
    expect(routerSpy.calls.first().args[0][0]).toBe('/students/new-student');
  });

});
