import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsGridComponent } from './subjects-grid.component';

describe('SubjectsComponent', () => {
  let component: SubjectsGridComponent;
  let fixture: ComponentFixture<SubjectsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
