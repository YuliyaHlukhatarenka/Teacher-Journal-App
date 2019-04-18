import { Component, OnInit, Renderer2 } from '@angular/core';
import { User } from '../../../common/entities/';
import { DataService } from '../../../common/services/storage-service/data.service';
import { Subject } from '../../../common/entities/';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ConvertDataService } from '../../../common/services/convert-data/convert-data.service';
import { CalculateAverageService } from '../../../common/services/calculate/calculate-average.service';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.scss'],
})
export class SubjectDetailsComponent implements OnInit {
  subject: Subject;
  students: User[];
  title: string;
  marks: object = {};
  average: object = {};
  currentValue: string;
  newDate: object;
  currentDateInput;
  
  constructor(
    private dataService: DataService,
    private convertDataService: ConvertDataService,
    private calculateAverage: CalculateAverageService,
    private route: ActivatedRoute,
    private router: Router,
    private renderer: Renderer2) { }

  ngOnInit() {
    this.title = this.route.snapshot.params.title;
    this.students = this.dataService.get('students');
    this.subject = this.dataService.get('subjects').find( el => el.name === this.title);
    this.marks = this.convertDataService.convertToWorkObject(this.students, this.subject);
    this.newDate = {};
    this.subject.marks.map( el => this.newDate[el["date"]] = el["date"] );
    this.average = this.subject.average;
  }
 
  public openAddNewColumnDate() {
    let newColumn = {};
    newColumn["date"] = '';
    this.subject.marks.push(newColumn);
  }

  public onSave() {
    for ( let item in this.newDate ) {
      if (this.newDate[item] === "") {
        return;
      }
    }
    this.subject.marks =  this.convertDataService.convertFromWorkObject(this.marks, this.subject.marks, this.newDate);
    this.subject.average = this.average;
    this.dataService.delete(this.title, 'subjects');
    this.dataService.add(this.subject, 'subjects');
    this.router.navigate(['/subjects']);
  }

  public onFocusIn(evt) {
    this.currentValue = evt.target.value;
  }

  public onFocusOut( evt, name: string, lastName: string) {
    if(evt.target.value != '' || (this.currentValue != '' && evt.target.value == '' )) {
       let user = name + ' ' + lastName;
       this.average = this.calculateAverage.calculate(this.marks[user], user, this.average);
    }
  }
  
  public onFocusInDateTitle(evt) {
    this.currentDateInput = evt.target;
  }

  public onBlur(evt) {
     if( !evt.target.value) {
       this.renderer.addClass(this.currentDateInput, 'input-error');
     }
   }

}

