import { Component, OnInit } from '@angular/core';
import { IStudent } from '../../../common/entities/';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state';
import { AddStudent } from 'src/app/store/actions';
import { ADD_STUDENT_FORM_TITLE,
  ADD_STUDENT_FORM_FILDS_TITLE,
  ADD_STUDENT_FORM_REQUIRED_FIELDS } from '../../../common/constants';
@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  public student: IStudent;
  public formTitle: string = ADD_STUDENT_FORM_TITLE;
  public fieldsTitle: string[] = ADD_STUDENT_FORM_FILDS_TITLE;
  public requiredFields: string[] = ADD_STUDENT_FORM_REQUIRED_FIELDS;

  constructor(
    private store: Store<IAppState>,
    private router: Router) {
  }

  public ngOnInit(): void {
    this.student = <IStudent>{firstName: '', lastName: '', address: '', description: ''};
  }

  public AddNewStudent(): void {
    this.store.dispatch(new AddStudent(this.student));
    this.router.navigate(['/students']);
  }

}
