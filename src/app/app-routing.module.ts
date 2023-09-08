import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {BandsComponent} from "./bands/bands.component";
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'bands', component: BandsComponent},
  {path: 'about', component: AboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
