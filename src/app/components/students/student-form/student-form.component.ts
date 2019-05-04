import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../common/services/db-service/data.service';
import { User } from '../../../common/entities/';
import { Router } from '@angular/router';
import { StoreService } from '../../../common/services/store-service/store.service';
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

  constructor(
    private dataService: DataService,
    private storeService: StoreService,
    private router: Router) {
  }

  ngOnInit() {
    this.student = new User('', '', '', '');
  }

  public AddNewStudent(): void {
    this.storeService.addStudentToStore(this.student);
    this.router.navigate(['/students']);
  }

}
