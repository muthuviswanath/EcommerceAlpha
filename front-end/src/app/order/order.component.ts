import { Component, OnInit } from '@angular/core';
import { IOrder } from './IOrder';
import { OrderServices } from './order.services';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderList:IOrder[];
  constructor(private service:OrderServices){}

  ngOnInit(): void {

    this.service.getAllOrderInfo().subscribe(

      res => this.orderList = res

    );
    }
}
