import { Injectable } from '@angular/core';
import JsonFile from '../../../../assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {}

  getDataFromLocalStorage(item: string) {
    if ( !localStorage.getItem(item) ) {
       localStorage.setItem(item, JSON.stringify(JsonFile[item]));

    }
    return JSON.parse(localStorage.getItem(item));
  }

  addDataToLocalStorage(element, item) {
    const data = JSON.parse(localStorage.getItem(item));
    localStorage.setItem(item, JSON.stringify(data.concat([element])));
  }

  deleteDataFromLocalStorage(element, item) {
    const data = JSON.parse(localStorage.getItem(item)).filter( el => el.name != element);
    localStorage.setItem(item, JSON.stringify(data));
  }
}
