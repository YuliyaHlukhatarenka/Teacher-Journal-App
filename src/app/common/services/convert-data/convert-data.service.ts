import { Injectable } from '@angular/core';
import {User} from '../../entities/';
import {Subject} from '../../entities/';

@Injectable({
  providedIn: 'root'
})
export class ConvertDataService {

  constructor() { }

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

  convertFromWorkObject( marks: object, subjectMarks: object[] ) {
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
           newSubjectMarks[index][student] = el[1];
         }
       });
      }
      return newSubjectMarks;
  }
}
