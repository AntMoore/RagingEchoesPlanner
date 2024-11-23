import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private localDataUrl = '/assets/data.json';

  constructor(private http: HttpClient) {}

  getLocalData(): Observable<any> {
    return this.http.get(this.localDataUrl);
  }

  getExternalData(url: string): Observable<any> {
    return this.http.get(url);
  }
  
}
