import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Users } from '../professional/user';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {
  
  url= "http://localhost:3000/employees";

  constructor(private http: HttpClient){}

  getData(): Observable<Users> {
    return this.http.get<Users>(this.url)
    .pipe(catchError(this.handleError));
  }

getDataById(id: number): Observable<Users> {
  return this.http.get<Users>(`${this.url}/${id}`)
  .pipe(catchError(this.handleError));
}

addData(users: Users): Observable<Users>{
  return this.http.post<Users>(this.url, users ,{
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
})
.pipe(catchError(this.handleError));
}

updateData(users: Users): Observable<void>{
  return this.http.put<void>(`${this.url}/${users}`,{
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
  postEmployee(users : Users): Observable<Users>{
    return this.http.post<Users>(this.url,users,{
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
    .pipe(catchError(this.handleError));
     
   }
}
