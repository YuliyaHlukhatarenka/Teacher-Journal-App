import { Component, OnInit } from '@angular/core';
import { User, Subject } from '../common/entities/';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state/jornal.state';
import * as StoreActions from '../store/actions';
import { TranslateService } from '@ngx-translate/core';

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
    private store: Store<AppState>,
    private translate: TranslateService) {
      this.result = {
        students: [],
        subjects: []
      }
      translate.setDefaultLang('en');

  }

  ngOnInit() {
    this.store.dispatch(new StoreActions.GetStudents());
    this.store.dispatch(new StoreActions.GetSubjects());
  }

  useLanguage(language: string) {
    this.translate.use(language);
}
}
