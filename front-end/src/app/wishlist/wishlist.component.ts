import { Component, Input, OnInit } from '@angular/core';
import { IWishlist } from './IWishlist';
import { WishlistServices } from './wishlist.services';
import { NgModel } from '@angular/forms';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductServices } from '../product-card/product.services';
import { IWishlistItem } from '../model/wishlist-list-dto';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit
{
  public sessionStorage = sessionStorage;
  userid :number = Number(sessionStorage.getItem('UserID'));
  wishList:IWishlistItem[];
  constructor(private Wishlistservice:WishlistServices){}

  ngOnInit(): void {
    this.Wishlistservice.getAllWishlistInfo(this.userid).subscribe((res) =>
    {
      console.log(res);
      this.wishList=res;
     });


    }


}
