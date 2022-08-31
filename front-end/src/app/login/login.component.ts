import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup,Form } from '@angular/forms';
import { ProductServices } from '../product.services';
import { UserServices } from '../user/user.services';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  ngOnInit(): void {}
  constructor(private service : ProductServices,private Userservice : UserServices) {}
 
  
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
           alert("Login SuccessFull,");
           sessionStorage.setItem('Username',this.loginForm.value.username);
           
           this.Userservice.getUserId(this.loginForm.value.username)
           .subscribe
           (
            response=>
            {
              sessionStorage.setItem('UserID',String(response[0].userId));
              if(String(response[0].role)=="seller")sessionStorage.setItem('UserRole',String(response[0].role));
            }
           )
           
         }
       }
       
     );
   } 

}