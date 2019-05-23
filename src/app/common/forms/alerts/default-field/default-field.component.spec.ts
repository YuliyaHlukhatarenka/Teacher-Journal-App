import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertModule } from 'ngx-bootstrap/alert';
import { DefaultFieldComponent } from './default-field.component';
import {  FirestoreSettingsToken } from '@angular/fire/firestore';
import { DataPickerService } from 'src/app/common/services/data-picker/data-picker.service';
import { DataService } from 'src/app/common/services/db-service/data.service';
import { DecimalPipe } from '@angular/common';


describe('DefaultFieldComponent', () => {
  let component: DefaultFieldComponent;
  let fixture: ComponentFixture<DefaultFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultFieldComponent ],
      imports: [
        AlertModule.forRoot()
      ],
      providers: [
        DataService,
        DecimalPipe,
        DataPickerService,
        { provide: FirestoreSettingsToken, useValue: {} }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


