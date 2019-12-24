import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//  Imported the HttpClientModule in order to consume our REST API
import { HttpClientModule } from '@angular/common/http';

import { WjChartModule } from '@grapecity/wijmo.angular2.chart';

import * as wjCore from '@grapecity/wijmo';
import * as wjChart from '@grapecity/wijmo.chart';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Added the HttpClientModule into our import,
    WjChartModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
