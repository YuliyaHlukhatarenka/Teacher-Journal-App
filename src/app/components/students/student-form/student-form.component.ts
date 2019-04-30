import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../common/services/storage-service/data.service';
import { User } from '../../../common/entities/';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError, of } from 'rxjs';
@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  public student: User;
  public formTitle: string = "Add new student:";
  public fieldsTitle: string[] = ["* Name", "* Last Name", "Address", "Description"];
  public requiredFields: string[] = ["firstName", "lastName"];

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
    this.student = new User('', '', '', '');
  }

  public AddNewStudent(): void {
    this.dataService.addStudentToStorage(this.student).pipe(catchError(err => {
      throwError(err);
      return of('ok');
    })).subscribe();
    this.router.navigate(['/students']);
  }

}
