import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  public subjects;

  constructor() { }

  ngOnInit() { }

  redrawTable(data) {
    this.subjects = data;
    this.subjects.map( subj => {
      subj.studentAndMarks = {};
      subj.marks.map( day => {
        if (day.checked === true) {
          for (let item in day) {
            if (item !== 'checked' && item !== 'date') {
              if(!subj.studentAndMarks[item]) {
                subj.studentAndMarks[item] = [];
              }
                subj.studentAndMarks[item].push(day[item])
            }
          }
        }
      })
     return subj; 
    })
  }
}
