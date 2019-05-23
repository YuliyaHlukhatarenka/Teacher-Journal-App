import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { DataPickerComponent } from './data-picker.component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { jornalReducer } from '../../../store/reducers/jornal.reducer';


describe('DataPickerComponent', () => {
  let component: DataPickerComponent;
  let fixture: ComponentFixture<DataPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataPickerComponent ],
      imports: [
        FormsModule,
        RouterModule.forRoot([]),
        StoreRouterConnectingModule.forRoot(),
        StoreModule.forRoot({ 'state': jornalReducer }),
  ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
