import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { isThisTypeNode } from 'typescript';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  constructor(private http: HttpClient) { }

  data = '';

  loadFromURL(url: string): Observable<string> {
    return this.http.get(url, { responseType: 'text' })
      .pipe(
        tap(
          data => this.setData(data),
          error => window.alert(error)
        )
      );
  }

  load(text: string) {
    this.setData(text);
  }

  setData(data) {
    this.data = this.parse(data);
  }

  getData(): string {
    return this.data;
  }

  private parse(data: string) {
    if(!data) {
      return;
    }

    data = data.split('\n\n').join('\n');

    let parsed = '';

    data.split('\n').forEach(t => {
      if (t.length > 100) {
        parsed += this.chunkSubstr(t, 100).join('\n') + '\n';
      } else {
        parsed +=t + '\n';
      }
    });

    console.log(">>>>>>>>>>>>>>>>>>>>>>>")
    console.log(parsed);
    console.log(">>>>>>>>>>>>>>>>>>>>>>>")
    return parsed;
  }

  private chunkSubstr(str: string, size: number) {
    const chunks: string[] = [];

    let words = str.split(' ');

    let chunk = '';
    for(let i = 0; i < words.length; i++) {
      if(chunk.length + words[i].length < size) {
        chunk += words[i] + ' ';
      } else {
        chunks.push(chunk);
        chunk = words[i] + ' ';
      }
    }

    if(chunk) {
      chunks.push(chunk);
    }

    return chunks;
  }

}
