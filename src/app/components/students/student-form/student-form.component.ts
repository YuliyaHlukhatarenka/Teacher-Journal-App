import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../common/services/data.service';
import User from '../../../common/entities/Users';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class  StudentFormComponent implements OnInit {
  StudentForm = new User('', '', '', '');
  students: User[] = [];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  public AddNewStudent() {
    this.dataService.add(this.StudentForm, 'students');
    this.router.navigate(['/students']);
  }

}
