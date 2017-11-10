import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { SummaryService } from './summary.service';


@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [SummaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
