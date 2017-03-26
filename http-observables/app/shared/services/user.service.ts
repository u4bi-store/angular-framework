import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../modules/user';

@Injectable()
export class UserService {
    private userUrl : string = 'https://reqres.in/api/users';

    constructor(private http : Http){}

    /**
     * 모든 유저의 데이터를 가져온다.
     */
    getUsers() : Observable<User[]>{
        return this.http.get(this.userUrl)
            .map(res => res.json().data);
    }
    // get user

    // create user

    // update user

    // delete user

}