import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../../../store/state/app.state';
import { Observable } from 'rxjs';
import { ISubject } from 'src/app/common/entities';
@Component({
  selector: 'app-subjects-grid',
  templateUrl: './subjects-grid.component.html',
  styleUrls: ['./subjects-grid.component.scss']
})
export class SubjectsGridComponent implements OnInit {
  public subjectState$: Observable<IAppState>;

  constructor(
    private router: Router,
    private store: Store<IAppState>
    ) { }

  public ngOnInit(): void {
    this.subjectState$ = this.store.pipe(select('subjectsState'));
  }

  public openAddNewSubjectPage(): void {
    this.router.navigate(['/subjects/new-subject']);
  }

  public click(subject: ISubject): void {
    this.router.navigate(['/subjects/' + subject.name]);

  }
}
