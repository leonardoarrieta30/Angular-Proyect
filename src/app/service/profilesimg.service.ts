import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {FilesUsers} from "../dermApp/model/FilesUsers";


@Injectable({
  providedIn: 'root'
})
export class FilesUsersService {

  basePath = 'http://localhost:3000/api/v1/fileusers';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Default error handling
      console.log(`An error occurred: ${error.error.message}`);
    } else {
      // Unsuccessful Response Error Code returned from Backend
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    // Return Observable with Error Message to Client
    return throwError(() => new Error('Something happened with request, please try again later'));
  }

  // Create img
  create(item: any): Observable<FilesUsers> {
    return this.http.post<FilesUsers>(
      this.basePath,
      JSON.stringify(item),
      this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Get img by id
  getById(id: any): Observable<FilesUsers> {
    return this.http.get<FilesUsers>(
      `${this.basePath}/${id}`,
      this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

}
