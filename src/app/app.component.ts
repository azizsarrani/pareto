// Imports bootstrapp templates, the styles from the wijmo package, and our styles.css file
import 'node_modules/bootstrap/dist/css/bootstrap.css';
import '@grapecity/wijmo.styles/wijmo.css';
import '../styles.css';
//
import { Component, Inject, enableProdMode, ViewChild, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { WjChartModule } from '@grapecity/wijmo.angular2.chart';
import { DataService, TDataItem } from './app.data';
import * as wjCore from '@grapecity/wijmo';
import * as wjChart from '@grapecity/wijmo.chart';


// Decorates the AppComponent class as an angular component and gives it some presets
@Component({
    selector: 'app-component',        // the css selector that identifies this in a template
    templateUrl: 'app.component.html' // path of the template file for the component
})
export class AppComponent {
  data: wjCore.CollectionView;
  palette: any;
  //
  constructor(@Inject(DataService) private dataService: DataService) {
      this.data = dataService.getData();
      this.palette = this._getRandomPalette();
  }
  //
  updateData() {
      let view = this.data;
      //
      view.deferUpdate(() => {
          view.items.forEach((item: TDataItem) => {
              item.sales += (Math.random() - .5) * .5 * item.sales;
          });
      });
  }
  //
  private _getRandomPalette() {
      let palettes = Object.getOwnPropertyNames(wjChart.Palettes)
        .filter(prop => typeof wjChart.Palettes[prop] === "object" && prop !== 'prototype');
      let rand = Math.floor(Math.random() * palettes.length);
      //
      return wjChart.Palettes[palettes[rand]];
  }
}
//
@NgModule({
  imports: [FormsModule, WjChartModule, BrowserModule],
  declarations: [AppComponent],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
//
enableProdMode();
// Bootstrap application with hash style navigation and global services.
platformBrowserDynamic().bootstrapModule(AppModule);

