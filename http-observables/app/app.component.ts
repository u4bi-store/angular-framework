import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './shared/modules/user';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'my-app',
  template: `
    <div class="jumbotron text-center">
      <h1>The App Lives!</h1>
      <p>{{ message }}</p>
    </div>

    <div *ngIf="users">
      <div *ngFor="let user of users">
        <h2> {{ user.first_name }} {{ user.last_name }}</h2>
      </div>
    </div>
  `
})
export class AppComponent implements OnInit {
  users : User[];

  constructor(private http: Http){
    
  }

  ngOnInit(){
    // this.http.get('https://reqres.in/api/users')
    //   .map(res => res.json().data)
    //   .subscribe(users => this.users = users);


    this.http.get('https://reqres.in/api/users')
      .toPromise()
      .then(data =>{
          console.log(data);
          console.log(data.json().data);
      });
  }

}

// .find((user, key) => user.first_name === 'george')