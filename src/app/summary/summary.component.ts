import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Summary } from '../summary';
import { SummaryService } from '../summary.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SummaryComponent implements OnInit {

  summary: Summary = {
    score: 0,
    score_text: "",
    average_daily_energy_usage: 0,
    average_daily_temp: 0
  }

  constructor(private summaryService: SummaryService) { }

  ngOnInit() {
    this.getSummary();
  }
  
  getSummary() {
    this.summaryService.getSummary(1)
      .subscribe(summary => this.summary = summary);
  }

}
