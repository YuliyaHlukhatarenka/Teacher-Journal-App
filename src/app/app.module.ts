import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './root/app-routing.module';
import { AppComponent } from './root/app.component';
import { StudentsComponent } from './components/students/students-table/students-table.component';
import { SubjectsGridComponent } from './components/subjects/subjects-grid/subjects-grid.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ExportComponent } from './components/export/export.component';
import { StudentFormComponent } from './components/students/student-form/student-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DataService } from './common/services/db-service/data.service';
import { SubjectFormComponent } from './components/subjects/subject-form/subject-form.component';
import { FormTemplateComponent } from './shared/components/forms/form-template/form-template.component';
import { FormAddItemComponent } from './common/forms/form-add-item/form-add-item.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { DefaultFieldComponent } from './common/forms/alerts/default-field/default-field.component';
import { SubjectDetailsComponent } from './components/subjects/subject-details/subject-details.component';
import { StoreModule } from '@ngrx/store';
import { jornalReducer } from './store/reducers/jornal.reducer';
import { DecimalPipe } from '@angular/common';
import { environment } from '../environments/environment';
export const firebase = environment.firebase;
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { ToIterableByKeyPipe } from './common/pipes/to-iterable-by-key/to-iterable-by-key.pipe';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { ActionsEffects } from './store/effects/actions.effects';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { DataPickerService } from './common/services/data-picker/data-picker.service';
import { DataPickerComponent } from './components/statistics/data-picker/data-picker.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MessageComponent } from './common/forms/form-add-item/message.component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { NgxUiLoaderModule } from  'ngx-ui-loader';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    SubjectsGridComponent,
    StatisticsComponent,
    ExportComponent,
    StudentFormComponent,
    SubjectFormComponent,
    FormTemplateComponent,
    FormAddItemComponent,
    DefaultFieldComponent,
    SubjectDetailsComponent,
    ToIterableByKeyPipe,
    DataPickerComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxUiLoaderModule, 
    FormsModule,
    HttpClientModule,
    AlertModule.forRoot(),
    StoreModule.forRoot({ 'state': jornalReducer }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([ActionsEffects]),
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }), 
    AccordionModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    PopoverModule.forRoot()
  ],
  providers: [
    DataService,
    DecimalPipe,
    DataPickerService,
    { provide: FirestoreSettingsToken, useValue: {} }
  ],
  bootstrap: [AppComponent],
  entryComponents: [MessageComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
