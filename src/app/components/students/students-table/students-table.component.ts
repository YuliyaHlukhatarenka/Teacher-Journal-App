import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../common/entities/';
import { DataService } from '../../../common/services/storage-service/data.service';
import { debounceTime } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsComponent implements OnInit {
  public students: User[];

  constructor(private router: Router, private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(debounceTime(200)).subscribe(() => {
      this.dataService.getStudentsFromStorage('students').subscribe((res) => {
        this.students = res;
      });
    })
  }

  public openAddNewStudentPage(): void {
    this.router.navigate(['/students/new-student']);
  }

}
