import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  constructor(private http: HttpClient) { }

  data;

  load(url: string): Observable<string> {
    return this.http.get(url, { responseType: 'text' })
      .pipe(
        tap(
          data => this.data = data,
          error => window.alert(error)
        )
      );
  }

  getData(): string {
    return this.data;
  }

}
