import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Homescore } from '../homescore';
import { HomescoreService } from '../homescore.service';

@Component({
  selector: 'app-homescore',
  templateUrl: './homescore.component.html',
  styleUrls: ['./homescore.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomescoreComponent implements OnInit {

  homescore: Homescore|null = null;

  constructor(private homescoreService: HomescoreService) { }

  ngOnInit() {
    this.getSummary();
  }

  getSummary() {
    this.homescoreService.getHomescore(1)
      .subscribe(homescore => { 
        this.homescore = homescore;
      });
  }
}
