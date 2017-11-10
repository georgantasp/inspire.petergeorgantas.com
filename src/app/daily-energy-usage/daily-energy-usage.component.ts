import { Component, OnInit, Input, SimpleChanges, ViewEncapsulation } from '@angular/core';

import { DailyEnergyUsage } from '../daily-energy-usage';

@Component({
  selector: 'app-daily-energy-usage',
  templateUrl: './daily-energy-usage.component.html',
  styleUrls: ['./daily-energy-usage.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DailyEnergyUsageComponent implements OnInit {

  @Input() dailyEnergyUsage: DailyEnergyUsage;
  
  data: any;
  options: any;

  constructor() { }

  ngOnInit() {
    this.options = {
      legend: { display: false },
      scales: {
        yAxes: [{
          display: false,
          ticks: {
            beginAtZero: true
          }
        }],
        xAxes: [{
          display: false
        }]
      }
    }
  }
  
  ngOnChanges(changes: SimpleChanges) {
  
    let usage = changes.dailyEnergyUsage.currentValue;
  
    this.data = {
      labels: usage.daily_energy_usage.map(d => d.date),
      datasets: [{
        label: 'Daily Usage',
        data: usage.daily_energy_usage.map(d => d.usage),
        backgroundColor: '#d9edf7',
        borderColor: '#0275d8'
      }]
    }
  }
}
