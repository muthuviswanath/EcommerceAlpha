import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup,Form } from '@angular/forms';
import { ProductServices } from '../product.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  ngOnInit(): void {}
  constructor(private service : ProductServices ) {}

  
   loginForm = new FormGroup
   (
    {
      username : new FormControl('',[Validators.required,Validators.minLength(5)]),
      password :  new FormControl('',[Validators.required,Validators.minLength(8)])
    }
   );

   loginauth():void
   {
    
     this.service.LoginUser([this.loginForm.value.username,this.loginForm.value.password])
     .subscribe
     (
       res=>
       {
         if(res=='Failure')
         {
           alert("Login Un-Successful");
         }
         else{
           alert("Login SuccessFull");
         }
       }
       
     );
   } 

   //Pending

  //  get Empname() : FormControl
  //  {
  //    return this.loginForm.get('username') as FormControl;
  //  }
  //  get Empid() : FormControl
  //  {
  //    return this.loginForm.get('password') as FormControl;
  //  }

}
