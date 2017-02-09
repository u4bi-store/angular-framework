import { Injectable } from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';

@Injectable()
export class AppAuthService {

  constructor(public firebase: AngularFire) {}

  loginWithGoogle() {
      return this.firebase.auth.login({
          provider: AuthProviders.Google,
          method: AuthMethods.Popup,
      });
  }

  logout() {
    return this.firebase.auth.logout();
  }

}
