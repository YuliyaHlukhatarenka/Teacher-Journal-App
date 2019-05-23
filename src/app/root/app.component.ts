import { Component, OnInit } from '@angular/core';
import { User, Subject } from '../common/entities/';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store/state/jornal.state';
import * as StoreActions from '../store/actions';
import { TranslateService } from '@ngx-translate/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';


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
  public isDataloaded = false;

  constructor(
    private ngxService: NgxUiLoaderService,
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
    this.store.pipe(select('state')).subscribe(res => {this.result = res });
    
    if((this.result["students"].length === 0) || (this.result["subjects"].length === 0)) {
      this.isDataloaded = false;
      this.ngxService.start(); 
    setTimeout(() => {
      this.ngxService.stop(); 
      this.isDataloaded = true;
    }, 1000);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
}
}
