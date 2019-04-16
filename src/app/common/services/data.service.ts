import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import JsonFile from '../../../assets/data.json';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  get(item: string) {
    if ( !localStorage.getItem(item) ) {
       localStorage.setItem(item, JSON.stringify(JsonFile[item]));

    }
    return JSON.parse(localStorage.getItem(item));
  }

  add(element, item) {
    const data = JSON.parse(localStorage.getItem(item));
    localStorage.setItem(item, JSON.stringify(data.concat([element])));
  }

  delete(element, item) {
    const data = JSON.parse(localStorage.getItem(item)).filter( el => el.name != element);
    localStorage.setItem(item, JSON.stringify(data));
  }
}
