import { Component, OnInit } from '@angular/core';
import { ICart } from './ICart';
import { CartServices } from './cart.services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartList:ICart[];
  constructor(private service:CartServices){}

  ngOnInit(): void {

    this.service.getAllCartInfo().subscribe(

      res => this.cartList = res

    );

  }

}
