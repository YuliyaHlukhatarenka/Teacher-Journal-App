import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from '../components/students/students-table/students-table.component';
import { SubjectsGridComponent } from '../components/subjects/subjects-grid/subjects-grid.component';
import { StatisticsComponent } from '../components/statistics/statistics.component';
import { ExportComponent } from '../components/export/export.component';
import { StudentFormComponent } from '../components/students/student-form/student-form.component';
import { SubjectFormComponent} from '../components/subjects/subject-form/subject-form.component';
import { SubjectDetailsComponent } from '../components/subjects/subject-details/subject-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  { path: 'students', component: StudentsComponent },
  { path: 'subjects', component: SubjectsGridComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'export', component: ExportComponent },
  { path: 'students/new-student', component:  StudentFormComponent },
  { path: 'subjects/new-subject', component:  SubjectFormComponent },
  { path: 'subjects/:title', component:  SubjectDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

