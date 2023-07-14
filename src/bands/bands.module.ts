import { ROUTES } from './bands.routes';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BandsComponent} from "./bands.component";
import {HttpModule} from "@angular/http";
import {GetDataService} from "./get-data.service";
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [BandsComponent],
  declarations: [BandsComponent],
  providers: [GetDataService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class BandsModule { }
