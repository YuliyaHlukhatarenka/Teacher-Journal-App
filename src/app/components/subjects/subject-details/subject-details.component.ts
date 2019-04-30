import { Component, OnInit, Renderer2 } from '@angular/core';
import { DataService } from '../../../common/services/storage-service/data.service';
import { Subject, Mark, User } from '../../../common/entities/';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ConvertDataService } from '../../../common/services/convert-data/convert-data.service';
import { CalculateAverageService } from '../../../common/services/calculate/calculate-average.service';
import { catchError } from 'rxjs/operators';
import { throwError, of } from 'rxjs';

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
    private dataService: DataService,
    private convertDataService: ConvertDataService,
    private calculateAverage: CalculateAverageService,
    private route: ActivatedRoute,
    private router: Router,
    private renderer: Renderer2) {
    this.subject = new Subject('', '', '', '');
    this.students = [];
    this.newDate = new Mark();
    this.marks = {}; 
    this.allDateDefined = true;
  }

  ngOnInit() {
    this.title = this.route.snapshot.params.title;
    this.dataService.getStudentsFromStorage('students').subscribe(res => {
      this.students = res;
    });

    this.dataService.getSubjectsFromStorage('subjects').subscribe(res => {
      this.subject = res.find(el => el.name === this.title)
    });
  
      setTimeout(() => {       
        this.marks = this.convertDataService.convertToWorkObject(this.students, this.subject.marks);
        this.subject.marks.map(el => this.newDate[el.date] = el.date);
        this.average = this.subject.average;
      }, 1000);
  
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
    this.dataService.deleteSubjectFromLocalStorage(this.subject._id).pipe(catchError(err => {
      throwError(err);
      return of('safety result');
    })).subscribe();;
    this.dataService.addSubjectToStorage(this.subject).pipe(catchError(err => {
      throwError(err);
      return of('safety result');
    })).subscribe();;
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

