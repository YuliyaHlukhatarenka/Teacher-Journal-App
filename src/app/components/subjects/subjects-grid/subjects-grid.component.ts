import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../store/state/jornal.state';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-subjects-grid',
  templateUrl: './subjects-grid.component.html',
  styleUrls: ['./subjects-grid.component.scss']
})
export class SubjectsGridComponent implements OnInit {
  state$: Observable<any>;

  constructor(
    private router: Router, 
    private store: Store<AppState>
    ) { }

  ngOnInit() {
    this.state$ = this.store.pipe(select('state'));
  }

  public openAddNewSubjectPage(): void {
    this.router.navigate(['/subjects/new-subject']);
  }

  public click(subject) {
    this.router.navigate(['/subjects/' + subject.name]);

  }
}
