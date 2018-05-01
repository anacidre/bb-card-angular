import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BbCardComponent } from './bb-card/bb-card.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, BbCardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
