import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
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
            .map(res => res.json().data)
            .catch(this.handleError);
    }
    /**
     * 특정 유저의 데이터를 가져온다.
     */
    getUser(user){
        return this.http.get('https://reqres.in/api/user/'+user.id)
        .map(res => res.json())
        .catch(this.handleError);
    }

    // create user

    // update user

    // delete user

    /**
     * 에러 캐칭 핸들러
     */
    private handleError(err){
        let errMessage : string;

        if(err instanceof Response){
            let body = err.json() || '';
            let error = body.error || JSON.stringify(body);

            errMessage = `${err.status} - ${err.statusText} || ''} ${error}`;
        }else{
            errMessage = err.message ? err.message : err.toString();
        }

        return Observable.throw(errMessage);
    }

}