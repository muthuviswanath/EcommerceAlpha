import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  public sessionStorage = sessionStorage;
  ngOnInit(): void {
  }
  logout():void
  {
   console.log("Hi logout");
   
   sessionStorage.removeItem('Username');

  
   sessionStorage.clear(); 
   
   sessionStorage = sessionStorage;
  }



}
