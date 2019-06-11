import { Injectable } from '@angular/core';
import {User} from '../../entities/';
import {Subject} from '../../entities/';
import {DecimalPipe} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ConvertDataService {

  constructor(private decimalPipe: DecimalPipe) { }

  convertToWorkObject( students: User[], subject: Subject): object {
    let marks = {};
    students.map( el => {
      let student = el.firstName + ' ' + el.lastName;
      marks[student] = {};
      let len = 0;
      let sum = 0;
      subject.marks.map( item => { 
        marks[student][item["date"]] = item[student] ? item[student] : "";
      } )
    })
    return marks;
  }

  convertFromWorkObject( marks: object, subjectMarks: object[], newDate ) {
    let newSubjectMarks: object[];
    newSubjectMarks = subjectMarks.map( el => {
      let newItem = {};
      newItem["date"] = el["date"];
      return newItem;
    });
    for ( let student in marks ) {
       let values =  Object.entries(marks[student]);
       values.map(el => { 
         if( el[1] !== "") 
         {
           let index = subjectMarks.findIndex( item => item["date"] === el[0]);
           newSubjectMarks[index][student] = this.decimalPipe.transform(el[1], '1.0-1');
         }
       });
      }
      newSubjectMarks.map( el => {
        el["date"] = newDate[el["date"]];
      });
      return newSubjectMarks;
  }
}
