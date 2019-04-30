import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/common/entities/';
import { DataService } from '../../../common/services/storage-service/data.service';
import { Router } from '@angular/router';
import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-new-subject',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.scss']
})
export class SubjectFormComponent implements OnInit {
  subject = new Subject('', '', '', '');
  formTitle: string = "Add new subject:";
  fieldsTitle: string[] = ["* Name", "* Teacher", "Cabinet", "Description"];
  requiredFields: string[] = ["name", "teacher"];

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit() { }

  public AddNewSubject() {
    this.dataService.addSubjectToStorage(this.subject).pipe(catchError(err => {
      throwError(err);
      return of('safety result');
    })).subscribe();
    this.router.navigate(['/subjects']);
  }

}