import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import 'rxjs';

import { User } from '../register-form/users.model';

@Injectable()
export class UserService {
    
    private userLoggedIn;
    private username;
    

  constructor(private http: HttpClient) { 
      this.userLoggedIn = false;
  }
    
    addUser(user: User): Observable<User> {
        return this.http.post('http://localhost:8000/users', user)
        .map((response: Response) => response.json())
        .catch((Error:any) => Observable.throw(Error.JSON().error || {message:"Error del server"}
        ));
        /*.map((Response) => Response.json())
        .catch((Error:any) => Observable.throw(Error-JSON().error || {message:"Error del server"} ));*/
        
        
    } 

setLoggedUser(){
    this.userLoggedIn = true;
}

getLoggedUser(){
    return this.userLoggedIn;
}

    }