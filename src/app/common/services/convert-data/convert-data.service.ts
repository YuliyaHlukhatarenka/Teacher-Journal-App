import { Injectable } from '@angular/core';
import { Subject, User, Mark } from '../../entities/';
import { DecimalPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ConvertDataService {

  constructor(private decimalPipe: DecimalPipe) { }

  convertToWorkObject(students: User[], marks) {
    let newMarks = {};
    marks.map(item => {
      newMarks[item.date] = {};
      students.map(el => {
        let student = el.firstName + ' ' + el.lastName;
        newMarks[item.date][student] = item[student] ? item[student] : "";
      })
    })
    return newMarks;
  }

  convertFromWorkObject(marks, subjectMarks: Mark[], newDate) {
    let newSubjectMarks: Mark[];
    newSubjectMarks = subjectMarks.map(el => {
      let newItem = new Mark;
      newItem.date = el.date;
      return newItem;
    });
    for (let day in marks) {
      let index = subjectMarks.findIndex(item => item.date === day);

      for (let student in marks[day]) {
        if (marks[day][student] !== "") {
          newSubjectMarks[index][student] = this.decimalPipe.transform(marks[day][student], '1.0-1');
        }
      }
    }
    newSubjectMarks.map(el => {
      el.date = newDate[el.date];
    });
    return newSubjectMarks;
  }
}
