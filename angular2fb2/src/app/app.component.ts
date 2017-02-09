import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable }from 'angularfire2';

import { AppAuthService } from './app-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isLogin: boolean;

  title = 'app works!';

  items: FirebaseListObservable<any[]>;

  constructor(private af : AngularFire, public appAuthService : AppAuthService){
    this.items = af.database.list('/items');

    this.appAuthService.firebase.auth.subscribe(
      (auth) => {
        if(auth == null) {
          console.log("로그인을 하지 않은 상태");
          this.isLogin = false;
        }
        else {
          console.log("로그인을 한 상태");
          this.isLogin = true;
        }
      }
    );

  }

  login() {
    this.appAuthService.loginWithGoogle().then((data) => {
      console.log('로그인 성공');
      console.log(data);
    });

  }

  logout(){
    this.appAuthService.logout();
    console.log('로그아웃 성공');
  }
  


}
