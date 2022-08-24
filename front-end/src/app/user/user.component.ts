import { Component, OnInit } from '@angular/core';
import { IUser } from './IUser';
import { UserServices } from './user.services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userList:IUser[];
  constructor(private service:UserServices){}

  ngOnInit(): void {

    this.service.getAllOrderInfo().subscribe(

      res => this.userList = res

    );
    }


}
