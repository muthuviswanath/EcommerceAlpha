import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductServices} from './product-card/product.services'

import { HttpClientModule } from '@angular/common/http';

import { Footer1Component } from './footer1/footer1.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CartComponent } from './cart/cart.component';
import { CartServices } from './cart/cart.services';
import { OrderComponent } from './order/order.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { OrderServices } from './order/order.services';
import { UserComponent } from './user/user.component';
import { WishlistServices } from './wishlist/wishlist.services';
import { UserServices } from './user/user.services';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,

    Footer1Component,
     ProductCardComponent,
     CartComponent,
     OrderComponent,
     WishlistComponent,
     UserComponent,
     HeaderComponent,
     BannerComponent,
     HomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [CartServices,OrderServices,WishlistServices,UserServices,ProductServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
