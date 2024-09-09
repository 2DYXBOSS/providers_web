import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';
import { RouterOutlet } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
