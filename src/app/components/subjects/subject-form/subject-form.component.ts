import { Component, OnInit } from '@angular/core';
import { ISubject } from 'src/app/common/entities/';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state';
import { AddSubject } from 'src/app/store/actions';
import { ADD_SUBJECT_FORM_TITLE,
  ADD_SUBJECT_FORM_FILDS_TITLE,
  ADD_SUBJECT_FORM_REQUIRED_FIELDS } from '../../../common/constants';

@Component({
  selector: 'app-new-subject',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.scss']
})
export class SubjectFormComponent {
  public subject: ISubject  = <ISubject>{name: '', teacher: '', cabinet: '', description: '', marks: [], average: {}};
  public formTitle: string = ADD_SUBJECT_FORM_TITLE;
  public fieldsTitle: string[] = ADD_SUBJECT_FORM_FILDS_TITLE;
  public requiredFields: string[] = ADD_SUBJECT_FORM_REQUIRED_FIELDS;

  constructor(
    private store: Store<IAppState>,
    private router: Router) {
  }

  public AddNewSubject(): void {
    this.store.dispatch( new AddSubject(this.subject));
    this.router.navigate(['/subjects']);
  }

}
