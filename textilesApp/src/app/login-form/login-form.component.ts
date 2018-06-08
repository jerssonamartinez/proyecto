import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router:Router, private user:UserService) { }

  ngOnInit() {
  }
 
    loginUser(event){
        
        event.preventDefault();
        var username = event.target.elements[0].value;
        var password = event.target.elements[1].value;
        
        console.log(username,password);
        if(username=='admin' && password== 'admin'){
            this.user.setLoggedUser();
            this.router.navigate(['ventas']);
        }
    }
}
