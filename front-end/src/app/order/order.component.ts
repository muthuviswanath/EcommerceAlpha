import { Component, OnInit } from '@angular/core';
import { IOrderHistory } from '../model/order-history-list';
import { IOrder } from './IOrder';
import { OrderServices } from './order.services';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  userid:number = Number(sessionStorage.getItem('UserID'));
  orderList:IOrderHistory[];
  constructor(private orderservice:OrderServices){}

  ngOnInit(): void {

    this.orderservice.getAllOrderHistory(this.userid).subscribe((res) => {
      console.log(res);
      this.orderList=res;
    });
}
}
