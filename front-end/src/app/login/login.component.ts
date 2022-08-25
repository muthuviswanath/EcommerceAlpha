import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup,Form } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  public showMessage:boolean=false;
  username = new FormControl('',[Validators.required,Validators.minLength(5)]);
  password = new FormControl('',[Validators.required,Validators.minLength(8)]);
 
  
  UserName : string='';
  PassWord : string='';
  
  


  ngOnInit(): void {}
  constructor(private builder: FormBuilder) {}
  
  loginForm : FormGroup = this.builder.group
    ({
    username :  this.username,
    password : this.password,
    });

    signupUser()
    {
      if(this.UserName=="Devansh" && this.PassWord=="Messon12")alert("Congratulations, Login SuccessFul");
      else alert("Login Un-SuccessFul");
    }
  
  

}
