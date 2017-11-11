import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(
    private route: ActivatedRoute,
    private homescoreService: HomescoreService
  ) { }

  ngOnInit() {
    this.getSummary();
  }

  getSummary() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.homescoreService.getHomescore(id)
      .subscribe(homescore => { 
        this.homescore = homescore;
      });
  }
}
