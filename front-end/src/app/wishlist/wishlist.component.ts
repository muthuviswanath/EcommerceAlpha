import { Component, Input, OnInit } from '@angular/core';
import { IWishlist } from './IWishlist';
import { WishlistServices } from './wishlist.services';
import { NgModel } from '@angular/forms';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductServices } from '../product-card/product.services';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishList:IWishlist[];
  constructor(private service:WishlistServices){}

  ngOnInit(): void {

    this.service.getAllWishlistInfo().subscribe(

      res => this.wishList = res

    );
    }


}
