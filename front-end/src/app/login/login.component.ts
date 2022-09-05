import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup,Form,  NgForm } from '@angular/forms';
import { ProductServices } from '../product.services';
import { UserServices } from '../user/user.services';
import { Router } from '@angular/router';
import { IAuthenticatedResponse } from 'src/app/Interfaces/IAuthenticatedResponse';



import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  
  constructor(
    private http: HttpClient,
    private route: Router
  ) {}

  ngOnInit() {}
  invalidLogin: boolean;
  userid: any;
  login = (form: NgForm) => 
  {
    const credentials = {
      userName: form.value.userName,
      password: form.value.password,
  };
    
    console.log(credentials);
    if (form.valid) 
    {
      this.http
        .post('http://localhost:5000/api/Auth/login', credentials)
        .subscribe({
          next: (response: IAuthenticatedResponse) => {
            const token = response.token;
            this.http
              .get(
                'http://localhost:5000/api/Users/Username/' +
                  credentials.userName
              )
              .subscribe((res) => {
                console.log("hhhhhhhh",res);
                this.userid = res;
               
                sessionStorage.setItem('UserID',this.userid);
                sessionStorage.setItem('Username',credentials.userName);
              });
            sessionStorage.setItem('jwt', token);
            this.invalidLogin = false;
            this.route
              .navigate(['/home'])
              .then(() => window.location.reload());
          },
          error: (err: HttpErrorResponse) => (this.invalidLogin = true),
        });
    }
  };


}