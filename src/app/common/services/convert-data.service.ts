import { Injectable } from '@angular/core';
import { IStudent, IMark } from '../entities';
import { DecimalPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ConvertDataService {

  constructor(private decimalPipe: DecimalPipe) { }

  public convertToWorkObject(students: IStudent[], marks: IMark[]): IMark {
    let newMarks: IMark = <IMark>{};
    marks.map(item => {
      newMarks[item.date] = {};
      students.map(el => {
        let student: string = `${el.firstName} ${el.lastName}`;
        newMarks[item.date][student] = item[student] ? item[student] : '';
      });
    });
    return newMarks;
  }

  public convertFromWorkObject(marks: IMark, subjectMarks: IMark[], newDate: IMark): IMark[] {
    let newSubjectMarks: IMark[];
    newSubjectMarks = subjectMarks.map(el => {
      let newItem: IMark = <IMark>{};
      newItem.date = el.date;
      return newItem;
    });
    for (let day in marks) {
      if (day) {
        let index: number = subjectMarks.findIndex(item => item.date === day);
        for (let student in marks[day]) {
          if (marks[day][student] !== '') {
            newSubjectMarks[index][student] = this.decimalPipe.transform(marks[day][student], '1.0-1');
          }
        }
      }
    }
    newSubjectMarks.map(el => {
      el.date = newDate[el.date];
    });
    return newSubjectMarks;
  }
}
