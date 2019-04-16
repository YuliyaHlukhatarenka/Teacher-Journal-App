import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../common/entities/';
import { DataService } from '../../../common/services/data.service';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsComponent implements OnInit {
  students: User[];

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.students = this.dataService.get('students');
  }


  public openAddNewStudentPage(): void {
    this.router.navigate(['/students/new-student']);

  }

}
