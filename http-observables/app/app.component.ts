import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { User } from './shared/modules/user';
import { UserService } from './shared/services/user.service';

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

  constructor(private service: UserService){
    
  }

  ngOnInit(){
    this.service.getUsers()
      .subscribe(
        users => this.users = users,
        err => {
          // show an err
          console.log(err);
        });
  }

}

// .find((user, key) => user.first_name === 'george')