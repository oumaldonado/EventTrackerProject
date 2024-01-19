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
}
