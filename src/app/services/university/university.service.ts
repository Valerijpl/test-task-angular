import { Injectable } from '@angular/core';
import { Observable, of, EMPTY } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { switchMap, map, share, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  constructor(private http: HttpClient) { }

  getUniversities(queryString: string): Observable<any> {
    let headers = new HttpHeaders({});

    return this.http.get(`http://universities.hipolabs.com/search?country=${queryString}`, { headers: headers }).pipe(share()).pipe(map((response: any) => {
      return response;
    }), catchError(err => {
      return err;
    }));
  }
}
