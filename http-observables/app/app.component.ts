import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './shared/modules/user';

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
    this.http.get('https://reqres.in/api/users')
      .subscribe(data => {
        console.log('API 출력');
        console.log(data);

        this.users = data.json().data;
        
      });
  }

}