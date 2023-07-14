import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule} from "@angular/http";
//import { ReactiveFormsModule, FormsModule}  from "@angular/forms/forms";
import { RouterModule } from '@angular/router';
import { NavModule } from '../nav/nav.module';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { NavComponent } from '../nav/nav.component';
//import { GetDataService } from "./get-data/get-data.service";

@NgModule({
  declarations: [
    AppComponent,  
    NavComponent
  ],
  imports: [
    BrowserModule,
    NavModule,
    /*FormsModule,
    ReactiveFormsModule,*/
    HttpModule,
    RouterModule.forRoot(ROUTES, {useHash: true}) // app.routes.ts
  ],
  //providers: [GetDataService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
