import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';

import { AppComponent }  from './app.component';
import { AboutComponent, AboutHomeComponent, AboutItemComponent } from './about.component';
import { HomeComponent } from './home.component';
import { BoardComponent } from './board.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AboutComponent,AboutHomeComponent,AboutItemComponent,
    HomeComponent,
    BoardComponent
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
