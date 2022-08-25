import { NgModule ,NO_ERRORS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';


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
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NewarrivalComponent } from './newarrival/newarrival.component';

@NgModule({
  declarations: [
    AppComponent,

    Footer1Component,
     ProductCardComponent,
     CartComponent,
     OrderComponent,
     WishlistComponent,
     UserComponent,

     LoginComponent,
     SignupComponent,

     NewarrivalComponent

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule
  ],
  providers: [CartServices,OrderServices,WishlistServices,UserServices,ProductServices],
  bootstrap: [AppComponent],
  schemas : [NO_ERRORS_SCHEMA]
})
export class AppModule { }
