import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { Tattoo } from '../models/tattoo';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TattooService {
  private url = environment.baseUrl + 'api/tattoos';

  constructor(private http: HttpClient) {}

  index(): Observable<Tattoo[]> {
    return this.http.get<Tattoo[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('TattooService.index(): error retrieving Todo: ' + err)
        );
      })
    );
  }
  create(newTattoo: Tattoo): Observable<Tattoo> {
    // newTodo.id = this.generateId();
    newTattoo.enabled = true;
    newTattoo.meaning = '';
    return this.http.post<Tattoo>(this.url, newTattoo).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('TattooService.creating(): error creating Tattoo: ' + err)
        );
      })
    );
  }

  update(tattoo: Tattoo): Observable<Tattoo> {

    return this.http.put<Tattoo>(this.url + '/' + tattoo.id, tattoo).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('TattooService.update(): error Updating Tattoo: ' + err)
        );
      })
    );
  }

  destroy(tatId: number): Observable<void> {
    return this.http.delete<void>(this.url + '/' + tatId).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error('TodoService.destroy(): error destroying Todo: ' + err)
        );
      })
    );
  }
  show(tatId: number): Observable<Tattoo> {
    return this.http.get<Tattoo>(this.url + '/' + tatId).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('TodoService.show(): error retrieving Todo: ' + err)
        );
      })
    );
  }
}

