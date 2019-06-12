import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataPickerComponent } from './data-picker/data-picker.component';
import { FormAddItemComponent } from '../../common/forms/form-add-item/form-add-item.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { HttpLoaderFactory } from 'src/app/app.module';
import { ToIterableByKeyPipe } from '../../common/pipes/to-iterable-by-key/to-iterable-by-key.pipe';
import { FormsModule } from '@angular/forms';
import { DefaultFieldComponent } from '../../common/forms/form-add-item/default-field/default-field.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { jornalReducer } from '../../store/reducers/subjects.reducer';

import { StatisticsComponent } from './statistics.component';

describe('StatisticsComponent', () => {
  let component: StatisticsComponent;
  let fixture: ComponentFixture<StatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StatisticsComponent, DataPickerComponent, FormAddItemComponent, ToIterableByKeyPipe, DefaultFieldComponent],
      imports: [FormsModule, AlertModule, TranslateModule.forChild({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }),
        RouterModule.forRoot([]),
        StoreRouterConnectingModule.forRoot(),
        StoreModule.forRoot({ 'state': jornalReducer }),],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
