import { ROUTES } from './about.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutComponent } from  "./about.component"

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [AboutComponent],
  exports: [AboutComponent]
})
export class AboutModule {

  constructor(){
    console.log('about module');
  }
}
