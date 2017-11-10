import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of'
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { DailyEnergyUsage, EnergyUsage } from './daily-energy-usage';

@Injectable()
export class DailyEnergyUsageService {
  
  private rootUrl = 'https://stg-garcon.herokuapp.com/api/1/subscriptions/homescore/';
  
  constructor(private http: HttpClient) { }

  getDailyEnergyUsage(id: number): Observable<DailyEnergyUsage> {
    const url = `${this.rootUrl}/${id}/energy/usage/daily`;
    return this.http.get(url)
      .map(result => {
        return new DailyEnergyUsage(result['daily_energy_usage'].map(obj => {
          let key = Object.keys(obj)[0];
          return new EnergyUsage(key, obj[key]);
        }));
      })
  }
}
