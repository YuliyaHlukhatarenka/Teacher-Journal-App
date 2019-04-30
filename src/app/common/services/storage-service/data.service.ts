import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { User } from '../../entities/';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Subject } from '../../entities/index';
const uuidv1 = require('uuid/v1');

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    ResponseType: 'text',
    Authorization: environment.firebase.apiKey,
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public collection: AngularFirestoreCollection<User | Subject>;
  
  constructor(private afs: AngularFirestore, private http: HttpClient) {}

  getStudentsFromStorage(item: string): Observable<User[]> {
    return this.http.get<User[]>( environment.webApi + item);
  }

  getSubjectsFromStorage(item: string): Observable<Subject[]> {
    return this.http.get<Subject[]>( environment.webApi + item);
  }

  addStudentToStorage(element): Observable<object>{
   element._id = uuidv1();
    return this.http.post<object>( environment.webApi + 'students', element, httpOptions);
  }

  addSubjectToStorage(element): Observable<object>{
    element._id = uuidv1();
     return this.http.post<object>( environment.webApi + 'subjects', JSON.stringify(element), httpOptions);
   }

  deleteSubjectFromLocalStorage(id): Observable<object> {
     return this.http.delete<object>(environment.webApi + 'subjects', { params: {id}});
  }
}
