import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
