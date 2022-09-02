import { Component, Input, OnInit } from '@angular/core';
import { IWishlist } from './IWishlist';
import { WishlistServices } from './wishlist.services';
import { NgModel } from '@angular/forms';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductServices } from '../product-card/product.services';
import { IWishlistItem } from '../model/wishlist-list-dto';
import { CartServices } from '../cart/cart.services';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit
{
  public sessionStorage = sessionStorage;
  userid :number = Number(sessionStorage.getItem('UserID'));
  wishList:any;
  model:any;
  constructor(private Wishlistservice:WishlistServices,private cartservice:CartServices){}

  ngOnInit(): void {
    this.Wishlistservice.getAllWishlistInfo(this.userid).subscribe((res) =>
    {
      console.log(res);
      this.wishList=res;
     });


    }

    public submitToCart(prdid: any): void {
      this.model.productId = prdid;
      this.model.userId = sessionStorage.getItem('UserID');
      this.model.cartTotal = 1;

      this.cartservice.addToCartTable(this.model).subscribe((res) => {});

      alert('Added to Cart !');

    }


}
