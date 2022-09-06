import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CRUDProductComponent } from './dummycrud/dummycrud.component';
import { NewarrivalComponent } from './newarrival/newarrival.component';
import { OrderComponent } from './order/order.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'order',component:OrderComponent},
  {path:'product-description',component:ProductDescriptionComponent},
  {path:'product-card',component:ProductCardComponent},
  {path:'thank-you',component:ThankYouComponent},
 {path:'cart',component:CartComponent},
 {path:'wishlist',component:WishlistComponent},
 {path:'newarrival',component:NewarrivalComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'crudproduct',component: CRUDProductComponent}
];

@NgModule
({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule
{

}
