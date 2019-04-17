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
import { DataService } from './common/services/storage-service/data.service';
import { SubjectFormComponent } from './components/subjects/subject-form/subject-form.component';
import { FormTemplateComponent } from './shared/components/forms/form-template/form-template.component';
import { FormAddItemComponent } from './common/forms/form-add-item/form-add-item.component';
import { ToIterablePipe } from './common/pipes/to-iterable.pipe';
import { AlertModule } from 'ngx-bootstrap/alert';
import { DefaultFieldComponent } from './components/alerts/default-field/default-field.component';
import { SubjectDetailsComponent } from './components/subjects/subject-details/subject-details.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';

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
    ToIterablePipe,
    DefaultFieldComponent,
    SubjectDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AlertModule.forRoot(),
    StoreModule.forRoot(reducers, { metaReducers }),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
