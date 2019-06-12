import { Component, OnInit, Renderer2 } from '@angular/core';
import { ISubject, IMark, IStudent } from '../../../common/entities/';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ConvertDataService } from '../../../common/services/';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../store/state/app.state';
import { UpdateSubject } from 'src/app/store/actions';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.scss'],
})
export class SubjectDetailsComponent implements OnInit {
  public subj: ISubject = <ISubject>{name: '', teacher: '', cabinet: '', description: ''};
  public students: IStudent[];
  public title: string;
  public marks: IMark;
  public average: object = {};
  public currentValue: string;
  public newDate: IMark;
  public currentDateInput: EventTarget;
  public allDateDefined: boolean;
  public defaultValuesNoSet: string = 'new date column';
  public currentFocus: EventTarget;

  constructor(
    private convertDataService: ConvertDataService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<IAppState>,
    private renderer: Renderer2) {
    this.students = [];
    this.title = '';
    this.newDate = <IMark>{};
    this.allDateDefined = true;
  }

  public ngOnInit(): void {
    this.title = this.route.snapshot.params.title;
    this.store.select('studentsState').subscribe(res => { this.students = res.students; } );
    this.store.select('subjectsState').subscribe(res =>  { this.subj = res.subjects.find(el => el.name === this.title); });
  }

  public ngAfterContentInit(): void {
    this.marks = this.convertDataService.convertToWorkObject(this.students, this.subj.marks);
    this.subj.marks.map(el => this.newDate[el.date] = el.date);
  }

  public openAddNewColumnDate(): void {
    let newColumn: IMark =  <IMark>{};
    let day: string = ((new Date()).toLocaleDateString()).slice(0, -5);
    newColumn.date = day;
    this.newDate[day] = day;
    this.subj.marks.push(newColumn);
    this.marks[day] = this.convertDataService.convertToWorkObject(this.students, [{ 'date': day }])[day];
  }

  public onFocusIn(evt: MouseEvent): void {
    this.currentValue = (evt.target as HTMLInputElement).value;
    this.currentFocus = event.target;
  }

  public onFocusOut(evt: MouseEvent, name: string, lastName: string): void {
    if (((evt.target as HTMLInputElement).value.trim() !== '')
    && ((+(evt.target as HTMLInputElement).value > 10)
      || (+(evt.target as HTMLInputElement).value < 1)
      || isNaN(+(evt.target as HTMLInputElement).value))) {
      this.renderer.addClass(evt.target, 'input-error');
      (this.currentFocus as HTMLInputElement).focus();
    } else {
      if ((evt.target as HTMLInputElement).value !== '' || (this.currentValue !== '' && (evt.target as HTMLInputElement).value === '')) {
        let user: string = `${name} ${lastName}`;
        let sum: number = Object.values(this.marks)
        .filter( data =>  data[user] !== '')
        .reduce(((acc, cur, idx, src) => cur[user] / src.length  + acc), 0);
        this.subj.average[user] = sum !== 0 ? sum : '';
        this.renderer.removeClass(evt.target, 'input-error');
      }
    }
  }

  public onFocusInDateTitle(evt: MouseEvent): void {
    this.currentDateInput = evt.target;
  }

  public onBlur(evt: MouseEvent ): void {
    if (!(<HTMLInputElement>evt.target).value) {
      this.renderer.addClass(this.currentDateInput, 'input-error');
    }
  }

  public onSave(): void {
    for (let item in this.newDate) {
      if (!this.newDate[item]) {
        this.allDateDefined = false;
        return;
      }
    }
    this.subj.marks = this.convertDataService.convertFromWorkObject(this.marks, this.subj.marks, this.newDate);
    this.store.dispatch(new UpdateSubject(this.subj));
    this.router.navigate(['/subjects']);
  }
}
