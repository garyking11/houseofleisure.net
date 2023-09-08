import {ROUTES} from './home.routes';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {GetDataService} from '../services/get-data.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [],
  declarations: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {

  constructor() {
  }
}
