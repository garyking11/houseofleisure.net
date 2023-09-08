import {ROUTES} from './bands.routes';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BandsComponent} from './bands.component';

// import {GetBandDataService} from './get-data.service';
import {RouterModule} from '@angular/router';
import {GetBandDataService} from '../services/get-band-data.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [],
  declarations: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class BandsModule {
}
