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
          console.log(auth);
          
          console.log('제공처내 이름    : '+auth.google.displayName);
          console.log('제공처내 이메일   : '+auth.google.email);
          console.log('제공처내 아바타   : '+auth.google.photoURL);
          console.log('제공처 사이트     : '+auth.google.providerId);
          console.log('제공처내 고유번호  : '+auth.google.uid);

          console.log('고유번호(동일)  : '+auth.uid);
          
          console.log('고유번호(동일)  : '+auth.auth.uid);
          console.log('유저이름  : '+auth.auth.displayName);
          console.log('이메일  : '+auth.auth.email);
          console.log('아바타  : '+auth.auth.photoURL);
          console.log('저장 사이트  : '+auth.auth.providerId);
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
