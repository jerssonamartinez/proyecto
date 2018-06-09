import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Http, Response, Headers } from '@angular/http';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(private userService: UserService, private http: Http) { }

  ngOnInit() {
  }
    
    users =[];
    getUser(){
         this.http.get('http://localhost:8000/users').subscribe(
             (res: Response) => {
                 this.users = res.json();  
             }   
         );
    }

   // user = new UserService();
    
    createUser(user){
        this.userService.addUser(user)
        .subscribe (
            user => console.log(user),
            Error => console.log(<any>Error)
        );
        
        
    }
    
    
}