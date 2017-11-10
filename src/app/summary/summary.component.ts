import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Summary } from '../summary';
import { SummaryService } from '../summary.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SummaryComponent implements OnInit {

  @Input() summary: Summary;

  constructor() { }

  ngOnInit() {
  }
}
