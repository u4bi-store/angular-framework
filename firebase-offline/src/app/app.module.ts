import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireOfflineModule } from 'angularfire2-offline';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: "AIzaSyAIZtk4_5tdjQmLI12ob59AX7qDkAwj4xs",
  authDomain: "offline-2ee6d.firebaseapp.com",
  databaseURL: "https://offline-2ee6d.firebaseio.com",
  storageBucket: "offline-test"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ 
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireOfflineModule,    
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
