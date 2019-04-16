import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../common/entities/';
import { DataService } from '../../../common/services/data.service';
import { Subject } from '../../../common/entities/';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.scss']
})
export class SubjectDetailsComponent implements OnInit {
  subject: Subject;
  students: User[];
  title: string;
  marks: object = {};
  average: object = {};
  currentValue: string;
  
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router) { }

  ngOnInit() {
    this.title = this.route.snapshot.paramMap.get('title');
    this.students = this.dataService.get('students');
    this.subject = this.dataService.get('subjects').find( el => el.name === this.title);
    this.students.map( el => {
      let student = el.firstName + ' ' + el.lastName;
      this.marks[student] = {};
      let len = 0;
      let sum = 0;
      this.subject.marks.map( item => { 
        this.marks[student][item["date"]] = item[student] ? item[student] : "";
      } )
    })
    this.average = this.subject.average;
  }

  calculateAverage( marks: object, user: string) {
    let len = 0;
    let sum = 0;
    for (let item in marks ) {
      if ( this.marks[user][item] != '') {
        len += 1;
        sum += +this.marks[user][item];
      }
    }  
    if( sum != 0 ) {
      this.average[user] = Math.round(sum/len*10)/10; 
    } else {
      this.average[user] = '';
    }
    
  }
   
  public openAddNewColumnDate() {
    let newColumn = {};
    newColumn["date"] = '';
    this.subject.marks.push(newColumn);
  }

  public onSave() {
    this.subject.marks = this.subject.marks.map( el => {
      let newItem = {};
      newItem["date"] = el["date"];
      return newItem;
    })
    for ( let student in this.marks ) {
       let values =  Object.entries(this.marks[student]);
       values.map(el => { 
         if( el[1] !== "") 
         {
           let index = this.subject.marks.findIndex( item => item["date"] === el[0]);
           this.subject.marks[index][student] = el[1];
         }
       });
      }
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
      this.calculateAverage(this.marks[user], user);
    }
  
  }
}

