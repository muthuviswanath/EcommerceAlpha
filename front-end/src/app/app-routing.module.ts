import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ThankkYouComponent } from './thankk-you/thankk-you.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CRUDProductComponent } from './dummycrud/dummycrud.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'product-card',component:ProductCardComponent},
  {path:'thankk-you',component:ThankkYouComponent},
 {path:'cart',component:CartComponent},
 {path:'wishlist',component:WishlistComponent},

/*
  {path:'product-card',
  loadChildren: () =>
  import('./product-card/product-card.component').then((m)=>m.ProductCardComponent)
  }*/

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
