import { ROUTES } from './home.routes';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from  "./home.component"
import {GetDataService} from "./get-data.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [HomeComponent],
  declarations: [HomeComponent],
  providers: [GetDataService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {

  constructor( ){
  console.log('home module');
  }
}
