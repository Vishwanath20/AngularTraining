import { Injectable } from '@angular/core';
import { User } from './User';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  // Node/Express API
  REST_API: string = 'http://localhost:3000';
  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  // Add
  AddUser(data: User): Observable<any> {
    console.log('###### Inside the userService--> AddUser, Data is::'+JSON.stringify(data));
    
    let API_URL = `${this.REST_API}/add-user`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Get all objects
  GetUsers() {
    return this.httpClient.get(`${this.REST_API}/users`);
  }

  // Get single object
  GetUser(id:any): Observable<any> {
    console.log('###### Inside the user-service, GetUser(id), ID is::'+id);
    
    let API_URL = `${this.REST_API}/read-user/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }
  // Update
  updateUser(id:any, data:any): Observable<any> {
    console.log('#######Inside the updateUser(), ID is::'+id);
    console.log('#######Inside the updateUser(), DATA is::'+JSON.stringify(data));
     
    let API_URL = `${this.REST_API}/update-user/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }
  // Delete
  deleteUser(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-user/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders}).pipe(
        catchError(this.handleError)
      )
  }
  // Error 
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
