import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { ItemDetailComponent } from './item-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ItemDetailComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
