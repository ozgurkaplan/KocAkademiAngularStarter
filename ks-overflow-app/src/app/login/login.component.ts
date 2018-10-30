import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel ={
    userName: "",
    password: ""
  };

  constructor(private _userService:UserService,private _router: Router) { }

  ngOnInit() {
  }

  login(){
    this._userService.login(this.loginModel.userName,this.loginModel.password).subscribe(u=>{
      if(!u && u.length>0&& u[0].id){
        alert("Usename or password is invalid!");
        return;
      }
      localStorage.setItem("userId",u[0].id);
      this._router.navigate(['']);
    });
  }
}
