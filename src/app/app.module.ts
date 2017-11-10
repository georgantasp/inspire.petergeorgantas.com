import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { SummaryService } from './summary.service';
import { HomescoreService } from './homescore.service';
import { HomescoreComponent } from './homescore/homescore.component';
import { DailyEnergyUsageService } from './daily-energy-usage.service';


@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    HomescoreComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [SummaryService, HomescoreService, DailyEnergyUsageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
