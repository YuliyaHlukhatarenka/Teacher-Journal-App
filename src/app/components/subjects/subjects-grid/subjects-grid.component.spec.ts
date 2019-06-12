import { async, ComponentFixture, TestBed} from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormAddItemComponent } from '../../../common/forms/form-add-item/form-add-item.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpLoaderFactory } from 'src/app/app.module';
import { ToIterableByKeyPipe } from '../../../common/pipes/to-iterable-by-key/to-iterable-by-key.pipe';
import { FormsModule } from '@angular/forms';
import { DefaultFieldComponent } from '../../../common/forms/form-add-item/default-field/default-field.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { of  } from 'rxjs';
import { SubjectsGridComponent } from './subjects-grid.component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ActionsEffects } from 'src/app/store/effects/actions.effects';
import { StoreModule } from '@ngrx/store';
import { subjectsReducer } from '../../../store/reducers/subjects.reducer';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { IAppState } from 'src/app/store/state';

describe('SubjectsGridComponent', () => {
  let component: SubjectsGridComponent;
  let fixture: ComponentFixture<SubjectsGridComponent>;
  let de: DebugElement[];
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsGridComponent, FormAddItemComponent, ToIterableByKeyPipe, DefaultFieldComponent ],
      imports:  [ FormsModule, AlertModule,
        StoreModule.forRoot({ 'state': subjectsReducer }),
        AngularFirestoreModule,
        HttpClientModule,
        RouterModule.forRoot([]),
        StoreRouterConnectingModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebase),
        EffectsModule.forRoot([ActionsEffects]),
        TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsGridComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.queryAll(By.css('p'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should display list  of subjects', () => {
  //   component.state$ = of(<AppState>{students: [], subjects: [{name: 'Literature'}]});
  //   fixture.detectChanges();
  //   de = fixture.debugElement.queryAll(By.css('p'));
  //   el = de[0].nativeElement;
  //   expect(el.textContent).toEqual('Literature');
  // });
});
