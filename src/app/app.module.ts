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
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './common/services/db-service/data.service';
import { SubjectFormComponent } from './components/subjects/subject-form/subject-form.component';
import { FormTemplateComponent } from './shared/components/forms/form-template/form-template.component';
import { FormAddItemComponent } from './common/forms/form-add-item/form-add-item.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { DefaultFieldComponent } from './components/alerts/default-field/default-field.component';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AlertModule.forRoot(),
    StoreModule.forRoot({'state' : jornalReducer}),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    RouterModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([ActionsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, 
    }),
  ],
  providers: [
    DataService,
    DecimalPipe,
    { provide: FirestoreSettingsToken, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
