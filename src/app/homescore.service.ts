import { Injectable } from '@angular/core';
import { Homescore } from './homescore';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of'
import { SummaryService } from './summary.service';
import { DailyEnergyUsageService } from './daily-energy-usage.service';

@Injectable()
export class HomescoreService {

  constructor(private summaryService: SummaryService, private dailyEnergyUsageService: DailyEnergyUsageService) { }
  
  getHomescore(id: number): Observable<Homescore> {
    return Observable.zip(
      this.summaryService.getSummary(id),
      this.dailyEnergyUsageService.getDailyEnergyUsage(id)
    ).map((data) => {
      return new Homescore(data[0], data[1]);
    });
  }
}
