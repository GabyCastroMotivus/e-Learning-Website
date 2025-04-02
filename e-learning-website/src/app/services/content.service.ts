import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private apiUrl = 'http://your-api-url.com'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getHtmlContent(): Observable<any> {
    return this.http.get(`${this.apiUrl}/html-content`);
  }

  getCssContent(): Observable<any> {
    return this.http.get(`${this.apiUrl}/css-content`);
  }

  getJavaContent(): Observable<any> {
    return this.http.get(`${this.apiUrl}/java-content`);
  }

  getJavascriptContent(): Observable<any> {
    return this.http.get(`${this.apiUrl}/javascript-content`);
  }

  getJqueryContent(): Observable<any> {
    return this.http.get(`${this.apiUrl}/jquery-content`);
  }

  getSqlContent(): Observable<any> {
    return this.http.get(`${this.apiUrl}/sql-content`);
  }
}
