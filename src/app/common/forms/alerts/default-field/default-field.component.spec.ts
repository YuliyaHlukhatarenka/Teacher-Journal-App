import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultFieldComponent } from './default-field.component';

describe('DefaultFieldComponent', () => {
  let component: DefaultFieldComponent;
  let fixture: ComponentFixture<DefaultFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultFieldComponent ]
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
