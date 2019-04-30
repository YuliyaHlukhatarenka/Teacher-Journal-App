import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateAverageService {

  constructor() { }

  calculate( marks, user: string) {
    let len = 0;
    let sum = 0;
    let result = '';
    for (let item in marks ) {
      if ( marks[item][user] != '') {
        len += 1;
        sum += +marks[item][user];
      }
    }  
    if( sum != 0 ) {
      result = Math.round(sum/len*10)/10 + ''; 
    } 
    return result;
  }
}
