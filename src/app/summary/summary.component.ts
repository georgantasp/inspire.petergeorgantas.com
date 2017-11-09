import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Summary } from '../summary';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SummaryComponent implements OnInit {

  summary: Summary = {
    score:48,
    score_text: "Your Home Score is an 48. You rank in the middle of the pack. Give us a call to find out how we can help.",
    average_daily_energy_usage:89,
    average_daily_temp:47
  }

  constructor() { }

  ngOnInit() {
  }

}
