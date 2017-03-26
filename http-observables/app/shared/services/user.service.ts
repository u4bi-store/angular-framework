import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

@Injectable()
export class UserService {

    constructor(private http : Http){

    }

    // all user
    getUsers(){
        return this.http.get('https://reqres.in/api/users')
            .map(res => res.json().data);
    }
    // get user

    // create user

    // update user

    // delete user

}