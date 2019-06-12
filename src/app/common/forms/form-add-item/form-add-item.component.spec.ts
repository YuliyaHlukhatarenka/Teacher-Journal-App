import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ToIterableByKeyPipe } from '../../pipes/to-iterable-by-key/to-iterable-by-key.pipe';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DefaultFieldComponent } from './default-field/default-field.component';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';
import { FormAddItemComponent } from './form-add-item.component';
import { HttpLoaderFactory } from '../../../../app/app.module';
import { DataService } from '../../services/data.service';

describe('FormAddItemComponent', () => {
  let component: FormAddItemComponent;
  let fixture: ComponentFixture<FormAddItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddItemComponent, ToIterableByKeyPipe, DefaultFieldComponent ],
      imports: [
        HttpClientModule,
        FormsModule,
        AlertModule,
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
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


