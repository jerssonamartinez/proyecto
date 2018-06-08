import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    
    private userLoggedIn;
    private username;

  constructor() { 
  this.userLoggedIn = false;
  }

setLoggedUser(){
    this.userLoggedIn = true;
}

getLoggedUser(){
    return this.userLoggedIn;
}

    }