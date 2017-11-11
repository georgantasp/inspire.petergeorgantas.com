import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'primeng/primeng'; 


import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { SummaryService } from './summary.service';
import { HomescoreService } from './homescore.service';
import { HomescoreComponent } from './homescore/homescore.component';
import { DailyEnergyUsageService } from './daily-energy-usage.service';
import { DailyEnergyUsageComponent } from './daily-energy-usage/daily-energy-usage.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    HomescoreComponent,
    DailyEnergyUsageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartModule,
    AppRoutingModule
  ],
  providers: [SummaryService, HomescoreService, DailyEnergyUsageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
