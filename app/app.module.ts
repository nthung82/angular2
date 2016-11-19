import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { routing } from './app.routing';
import { AppComponent }  from './app.component';
import { GoodComponent }  from './app.goodList';
import { SimpleTimer }  from './SimpleTimer';
import { EmployeeDetailComponent } from './employee-detail.component';
import {Main} from "./app.Main";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    Main,
    AppComponent,
    SimpleTimer,
	  EmployeeDetailComponent,
    GoodComponent
  ],
  bootstrap: [ Main ]
})
export class AppModule { }
