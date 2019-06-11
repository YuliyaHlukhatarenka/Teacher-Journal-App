import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../common/entities/';
import { DataService } from '../../../common/services/storage-service/data.service';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsComponent implements OnInit {
  students: User[];

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.students = this.dataService.getDataFromLocalStorage('students');
  }


  public openAddNewStudentPage(): void {
    this.router.navigate(['/students/new-student']);

  }

}
