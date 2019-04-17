import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateAverageService {

  constructor() { }

  calculate( marks: object, user: string, average: object) {
    let len = 0;
    let sum = 0;
    for (let item in marks ) {
      if ( marks[item] != '') {
        len += 1;
        sum += +marks[item];
      }
    }  
    if( sum != 0 ) {
      average[user] = Math.round(sum/len*10)/10; 
    } else {
      average[user] = '';
    }
    return average;
  }
}
