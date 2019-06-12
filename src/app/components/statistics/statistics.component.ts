import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { ISubject, IMark } from 'src/app/common/entities';

interface IAverageMarks  {
  name: string;
  value: number;
}
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {
  public subjects: ISubject[];
  public studentAndMarksArray: {};

  private average(marks: {}): IAverageMarks[] {
    console.log((marks));
    return Object.keys(marks)
    .map(item => { return <IAverageMarks>{name: item, value: Math.round(this.sum(marks[item]) / marks[item].length * 10) / 10}; } );
  }

  private sum(arr: string[]): number {
    return arr.map(item => +item).reduce((cur, acc) => cur + acc);
  }

  private drawGraph(subj: ISubject): void {
    let data: IAverageMarks[] = this.average(subj.studentAndMarks);
    console.log(data);

    let width: number = 300;
    let scaleFactor: number = 20;
    let barHeight: number = 30;
    let graph: d3.Selection<SVGSVGElement, {}, HTMLElement, undefined> = d3
      .select('.statistics-container')
      .append('svg')
      .attr('width', width)
      .attr('height', barHeight * data.length);

    let bar: d3.Selection<SVGGElement, IAverageMarks, SVGSVGElement, {}>  = graph
      .selectAll('g')
      .data(data)
      .enter()
      .append('g')
      .attr('transform', function (d: object, i: number): string {
        return 'translate(0,' + i * barHeight + ')';
      });

    bar
      .append('rect')
      .attr('width', function (d: IAverageMarks): number { return +d.value * scaleFactor; })
      .attr('height', barHeight - 1);

    bar.append('text')
      .attr('x', function (d: IAverageMarks): number { return (+d.value * scaleFactor); })
      .attr('y', barHeight / 2)
      .attr('dy', '.35em')
      .text(function (d: IAverageMarks): string { return d.name; });

  }

  public redrawTable(data: ISubject[]): void {
    this.subjects = data;
    this.subjects.map(subj => {
      subj.studentAndMarks = {};
      subj.marks.map(day => {
        if (day.checked === true) {
          for (let item in day) {
            if (item !== 'checked' && item !== 'date') {
              if (!subj.studentAndMarks[item]) {
                subj.studentAndMarks[item] = [];
              }
              subj.studentAndMarks[item].push(day[item]);
            }
          }
        }
      });
      return subj;
    });
    this.subjects.map(elem => { this.drawGraph(elem); });
  }
}
