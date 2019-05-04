import { Component, OnInit, Renderer2 } from '@angular/core';
import { DataService } from '../../../common/services/db-service/data.service';
import { Subject, Mark, User } from '../../../common/entities/';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ConvertDataService } from '../../../common/services/convert-data/convert-data.service';
import { CalculateAverageService } from '../../../common/services/calculate/calculate-average.service';
import { Store, select } from '@ngrx/store';
import { StoreService } from '../../../common/services/store-service/store.service';
import { AppState } from '../../../store/state/jornal.state';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.scss'],
})
export class SubjectDetailsComponent implements OnInit {
  subject: Subject;
  students: User[];
  title: string;
  marks: object;
  average: object = {};
  currentValue: string;
  newDate: Mark;
  currentDateInput;
  allDateDefined: boolean;
  defaultValuesNoSet: string = "new date column";

  constructor(
    private convertDataService: ConvertDataService,
    private calculateAverage: CalculateAverageService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>,
    private storeService: StoreService,
    private renderer: Renderer2) {
    this.subject = new Subject('', '', '', '');
    this.students = [];
    this.newDate = new Mark();
    this.marks = {}; 
    this.allDateDefined = true;
  }

  ngOnInit() {
    console.log(this.subject);
    this.title = this.route.snapshot.params.title;
    this.store.pipe(select('state')).subscribe(res => { 
      this.students = res.students;
      this.subject = res.subjects.find(el => el.name === this.title);
    })  
        this.marks = this.convertDataService.convertToWorkObject(this.students, this.subject.marks);
        this.subject.marks.map(el => this.newDate[el.date] = el.date);
        this.average = this.subject.average;
  }

  public openAddNewColumnDate() {
    let newColumn = new Mark;
    newColumn.date = '';
    this.subject.marks.push(newColumn);
    this.marks[''] = this.convertDataService.convertToWorkObject(this.students, [{"date":'0'}])['0'];

  }

  public onSave() {
    this.allDateDefined = true;
    for (let item in this.newDate) {
      if (!this.newDate[item]) {
        this.allDateDefined = false;
        return;
      }
    }
    this.subject.marks= this.convertDataService.convertFromWorkObject(this.marks, this.subject.marks, this.newDate);
    this.subject['average'] = this.average;
    this.storeService.updateSubjectInStore(this.subject);
    this.router.navigate(['/subjects']);
  }

  public onFocusIn(evt) {
    this.currentValue = evt.target.value;
  }

  public onFocusOut(evt, name: string, lastName: string) {
    if (evt.target.value != '' || (this.currentValue != '' && evt.target.value == '')) {
      let user = name + ' ' + lastName;
      this.average[user] = this.calculateAverage.calculate(this.marks, user);
    }
  }

  public onFocusInDateTitle(evt) {
    this.currentDateInput = evt.target;
  }

  public onBlur(evt) {
    if (!evt.target.value) {
      this.renderer.addClass(this.currentDateInput, 'input-error');
    }
  }

}

