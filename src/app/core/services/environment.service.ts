import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {IEnvironment, IEnvironmentsResponse} from '../../shared/models/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  private url = '/environmentsGit';
  private environments: IEnvironment[];
  constructor(private http: HttpClient) {}

  getEnvironments(): Observable<IEnvironment[]> {
    if (this.environments && this.environments.length > 0) {
      return of(this.environments);
    }
    return this.http.get<IEnvironmentsResponse>(this.url).pipe(
      tap(data => console.log(JSON.stringify(data))),
      map(data => data.results),
      tap(data => this.environments = data),
      // map(data => data.results),
      catchError(this.handleError)
    );
  }

  getEnvByName(name: string) {
    return this.environments.find(env => env.name === name);
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
