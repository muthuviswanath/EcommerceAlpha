import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup,Form } from '@angular/forms';
import { UserServices } from '../user/user.services';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit
{
  title = 'ECommerce';
  public showMessage:boolean=false;
  username = new FormControl('',[Validators.required,Validators.minLength(5)]);
  password = new FormControl('',[Validators.required,Validators.minLength(8)]);
  address  = new FormControl('',Validators.required);
  email  = new FormControl('',Validators.required);
  role = new FormControl('',Validators.required);


  ngOnInit(): void {}
  constructor(private builder: FormBuilder, private services:UserServices) {}

  loginForm : FormGroup = this.builder.group
    ({
    username :  this.username,
    password : this.password,
    address : this.address,
    email :this.email,
    role : this.role
    });

    signupUser()
    {
      this.showMessage = true;
    }
    model: any = {};
    public submit(): void {
      this.services.addUserData(this.model).subscribe();
    }

}
