import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../common/entities/';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../store/state/jornal.state';
import * as StoreActions from '../../../store/actions';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsComponent implements OnInit {
  public state$: Observable<any>;

  constructor(private router: Router, private store: Store<AppState>) { }

  ngOnInit() {
    this.state$ = this.store.pipe(select('state'));
  }

  public openAddNewStudentPage(): void {
    this.router.navigate(['/students/new-student']);
  }

}
