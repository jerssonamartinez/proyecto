import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { UserService } from '../services/user.service';

import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router:Router, private http: Http) { }

  ngOnInit() {
      this.fetchData();
  }
    public users =[];
    
    fetchData= function(){
        this.http.get('http://localhost:8000/users')
            .subscribe( (res: Response) => {
            this.users = res.json();
            console.log(this.users);
        })
        }
 
    
    loginUser(event){
        
        event.preventDefault();
        var username = event.target.elements[0].value;
        var password = event.target.elements[1].value;
        
        /*if(username==this.users[0] && password== this.users[2]){
            //this.user.setLoggedUser();
            this.router.navigate(['ventas']);
        }*/
        for(var i=0;i<this.users.length;i++){
            
            if(username==this.users[i].usuario && password== this.users[i].password){
                this.router.navigate(['ventas']);
                break;
        }
        
        }
        
    }
}

