import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';

import {RouterModule, ROUTES} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {NavComponent} from './nav/nav.component';
import {NavModule} from './nav/nav.module';
import {HomeComponent} from './home/home.component';
import {BandsComponent} from './bands/bands.component';
import {GetBandDataService} from './services/get-band-data.service';
import {GetDataService} from './services/get-data.service';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';




@NgModule({
  providers: [
    GetBandDataService,
    GetDataService
  ],
  declarations: [
    AppComponent,
    NavComponent,
    BandsComponent,
    HomeComponent,
    HeaderComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    NavModule,
    RouterModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
