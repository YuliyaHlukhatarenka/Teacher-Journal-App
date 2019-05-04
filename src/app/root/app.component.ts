import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { User, Subject } from '../common/entities/';
import { DataService } from '../common/services/db-service/data.service';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state/jornal.state';
import * as StoreActions from '../store/actions';
import { forkJoin } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Teacher journal';
  public result: {
    students: User[],
    subjects: Subject[]
  }

  constructor(
    private dataService: DataService,
    private store: Store<AppState>
  ) {
    this.result = {
      students: [],
      subjects: []
    }
  }

  ngOnInit() {
    this.store.dispatch( new StoreActions.GetStudents());
    this.store.dispatch( new StoreActions.GetSubjects());
  }
}
