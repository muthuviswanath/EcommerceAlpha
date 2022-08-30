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
  userid :number = 1;
  wishList:any;
  constructor(private Wishlistservice:WishlistServices){}

  ngOnInit(): void {
    this.Wishlistservice.getAllWishlistInfo(this.userid).subscribe((res) => {
      console.log(res);
      this.wishList=res;
     });


    }


}
