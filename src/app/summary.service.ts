import { Injectable } from '@angular/core';
import { Summary } from './summary';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of'
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class SummaryService {
  
  private rootUrl = 'https://stg-garcon.herokuapp.com/api/1/subscriptions/homescore/';

  constructor(private http: HttpClient) { }

  getSummary(id: number): Observable<Summary> {
    const url = `${this.rootUrl}/${id}/summary`;
    return this.http.get<Summary>(url);
  }
}
