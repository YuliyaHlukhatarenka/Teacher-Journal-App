import { Component, OnInit } from '@angular/core';
import { IStudent, ISubject } from '../common/entities/';
import { Store, select } from '@ngrx/store';
import { IStudentsState, ISubjectsState } from '../store/state';
import * as StoreActions from '../store/actions';
import { TranslateService } from '@ngx-translate/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title: string = 'Teacher journal';
  public result: {
    students: IStudent[],
    subjects: ISubject[]
  };
  public isDataloaded: boolean = false;

  constructor(
    private ngxService: NgxUiLoaderService,
    private storeStudents: Store<IStudentsState>,
    private storeSubjects: Store<ISubjectsState>,
    private translate: TranslateService) {
    this.result = {
      students: [],
      subjects: []
    };
    translate.setDefaultLang('en');

  }

  public ngOnInit(): void {
    this.storeStudents.dispatch(new StoreActions.GetStudents());
    this.storeSubjects.dispatch(new StoreActions.GetSubjects());
    this.storeStudents.pipe(select('studentsState')).subscribe(res => { this.result.students = res.students; });
    this.storeSubjects.pipe(select('subjectsState')).subscribe(res => { this.result.subjects = res.subjects; });

    if ((this.result.students.length === 0) || (this.result.subjects.length === 0)) {
      this.isDataloaded = false;
      this.ngxService.start();
      setTimeout(() => {
        this.ngxService.stop();
        this.isDataloaded = true;
        console.log(this.result.students, this.result.subjects);
      },         1000);
    }
  }

  public useLanguage(language: string): void {
    this.translate.use(language);
  }
}
