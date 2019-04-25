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
import { DataService } from './common/services/data.service';
import { SubjectFormComponent } from './components/subjects/subject-form/subject-form.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    SubjectsGridComponent,
    StatisticsComponent,
    ExportComponent,
     StudentFormComponent,
    SubjectFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
