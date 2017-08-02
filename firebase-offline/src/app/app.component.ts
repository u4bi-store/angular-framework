import { Component } from '@angular/core';
import { AfoListObservable, AfoObjectObservable, AngularFireOfflineDatabase } from 'angularfire2-offline/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  items: AfoListObservable<any[]>;

  constructor(afoDatabase: AngularFireOfflineDatabase){
    this.items = afoDatabase.list('/items');

  }

  add(value : string){
    this.items.push({
        name : value
    });

  }


}
