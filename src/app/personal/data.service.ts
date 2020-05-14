import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  url= "http://localhost:3000/employees";

  constructor(private http: HttpClient){}

  getData(): Observable<User> {
    return this.http.get<User>(this.url)
    .pipe(catchError(this.handleError));
  }

getDataById(id: number): Observable<User> {
  return this.http.get<User>(`${this.url}/${id}`)
  .pipe(catchError(this.handleError));
}

addData(user: User): Observable<User>{
  return this.http.post<User>(this.url, user ,{
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
})
.pipe(catchError(this.handleError));
}

updateData(user: User): Observable<void>{
  return this.http.put<void>(`${this.url}/${user}`,{
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  })
  .pipe(catchError(this.handleError));
}

deleteData(id:number): Observable<void>{
  return this.http.delete<void>('${this.url}/${id}')
  .pipe(catchError(this.handleError));
}
private handleError(errorResponse: HttpErrorResponse){
  if(errorResponse.error instanceof ErrorEvent){
    console.error('client side Error :', errorResponse.error.message);
  }else{
    console.error('server side Error: ', errorResponse);
  }
  return throwError('There is a problem with service');
}
  postEmployee(user : User): Observable<User>{
    return this.http.post<User>(this.url,user,{
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
    .pipe(catchError(this.handleError));
     
   }
  
}
