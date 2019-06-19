import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ToIterableByKeyPipe } from '../../pipes/to-iterable-by-key/to-iterable-by-key.pipe';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';
import { FormAddItemComponent } from './form-add-item.component';
import { HttpLoaderFactory } from '../../../../app/app.module';
import { DataService } from '../../services/data.service';
import { ISubject, IStudent } from '../../entities';
import { MessageComponent } from './message.component';
import { ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('FormAddItemComponent', () => {
  let component: FormAddItemComponent;
  let fixture: ComponentFixture<FormAddItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddItemComponent, ToIterableByKeyPipe, MessageComponent],
      imports: [
        HttpClientModule,
        FormsModule,
        AlertModule.forRoot(),
        TranslateModule.forRoot({
          loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [HttpClient]
          }
      }),
      ],
      providers: [
        DataService
      ],
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [MessageComponent]
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddItemComponent);
    component = fixture.componentInstance;
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show error message when fields are not defined', () => {
    component.formTitle = 'sdf';
    component.fieldsTitle = ['* First Name', '* Last Name', 'Address', 'Comment'],
    component.requiredFields = ['firstName', 'lastName'];
    component.item = <IStudent>{'firstName': '', lastName: ''};
    fixture.detectChanges();
    component.onClickAdd();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('div').innerText).toContain('Please, define field');
  });
});
