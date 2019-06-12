import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { IStudent } from '../entities';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ISubject } from '../entities/index';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import uuidv1 from 'uuid/v1';

const httpOptions: object = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    ResponseType: 'text',
    Authorization: environment.firebase.apiKey,
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public collection: AngularFirestoreCollection<IStudent | ISubject>;

  constructor(private afs: AngularFirestore, private http: HttpClient) { }

  public getStudentsFromStorage(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(environment.webApi + 'students');
  }

  public getSubjectsFromStorage(): Observable<ISubject[]> {
    return this.http.get<ISubject[]>(environment.webApi + 'subjects');
  }

  public addStudentToStorage(element: IStudent): Observable<object> {
    element._id = uuidv1();
    return this.http.post<object>(environment.webApi + 'students', element, httpOptions);
  }

  public addSubjectToStorage(element: ISubject): Observable<object> {
    element._id = uuidv1();
    return this.http.post<object>(environment.webApi + 'subjects', element, httpOptions);
  }

  public deleteSubjectFromLocalStorage(id: string): Observable<object> {
    return this.http.delete<object>(environment.webApi + 'subjects', { params: { id } });
  }

  public updateSubjectInStore(subject: ISubject): Observable<object> {
    return this.http.post<object>(environment.webApi + 'update/subject', subject, httpOptions);
  }
}
