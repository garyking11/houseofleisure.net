import {Routes} from '@angular/router';

export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
   {
        path: 'home',
        loadChildren: '../home/home.module#HomeModule'
   },
   {
        path: 'about',
        loadChildren: '../about/about.module#AboutModule'
   },
    {
        path: 'bands',
        loadChildren: '../bands/bands.module#BandsModule'
    }
];