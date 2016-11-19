import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoodComponent }  from './app.goodList';
import {AppComponent} from "./app.component";
import {Main} from "./app.Main";


const appRoutes: Routes = [
  {
    path: 'lists',
    component: GoodComponent
  },
  {
    path: 'addnew',
    component: AppComponent
  }
  ,
  { path: '', redirectTo: 'addnew', pathMatch: 'full'}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);