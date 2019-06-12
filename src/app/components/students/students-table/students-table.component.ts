import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../../../store/state/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsComponent implements OnInit {
  public studentsState$: Observable<IAppState>;

  constructor(private router: Router, private store: Store<IAppState>) { }

  public ngOnInit(): void {
    this.studentsState$ = this.store.pipe(select('studentsState'));
  }

  public openAddNewStudentPage(): void {
    this.router.navigate(['/students/new-student']);
  }

}
