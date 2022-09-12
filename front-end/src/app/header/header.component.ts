import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { CartComponent } from '../cart/cart.component';
import { CartServices } from '../cart/cart.services';
import { WishlistServices } from '../wishlist/wishlist.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cartservice: CartServices,
              private wishlistservice:WishlistServices) {

   }
  public sessionStorage = sessionStorage;
  userId: any;
  cartList:any;
  cartListLength:number;
  wishListLength:number;
  wishList:any;
  usercheck = Boolean(sessionStorage.getItem('UserID'))
  ngOnInit(): void
  {
    this.userId = this.sessionStorage.getItem('UserID');
    if (this.userId != 0)
      this.cartservice
        .getAllCartInfo(this.userId)
        .subscribe((res) => {

          this.cartList = res;
          this.cartListLength = this.cartList.length;
          console.log("sdviubsdiv",this.cartListLength);

        });
        this.wishlistservice
        .getAllWishlistInfo(this.userId)
        .subscribe((res) => {
          this.wishList = res;
          this.wishListLength = this.wishList.length;

        });
  }
  logout():void
  {
   sessionStorage.removeItem('Username');
   sessionStorage.removeItem('UserID');
   sessionStorage.removeItem('UserRole');
   sessionStorage.removeItem('jwt');
   sessionStorage.clear();
   sessionStorage = sessionStorage;
   this.usercheck = Boolean(sessionStorage.getItem('UserID'))
   window.location.reload();
  }
  clearsession():void
  {
    this.sessionStorage.removeItem('ProductCategory');

  }



}
