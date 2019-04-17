import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../common/services/storage-service/data.service';
import { User } from '../../../common/entities/';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class  StudentFormComponent implements OnInit {
  student = new User('', '', '', '');
  formTitle: string = "Add new student:";
  fieldsTitle: string[] = ["* Name", "* Last Name", "Address", "Description"] ;
  requiredFields: string[] = ["firstName", "lastName"];

  constructor(private dataService: DataService, private router: Router) {
   }

  ngOnInit() {
  }

  public AddNewStudent() {
    this.dataService.add(this.student, 'students');
    this.router.navigate(['/students']);
  }

}
