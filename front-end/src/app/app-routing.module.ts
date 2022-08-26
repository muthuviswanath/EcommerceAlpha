import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ProductCardComponent } from './product-card/product-card.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'product-card',component:ProductCardComponent},
/*
  {path:'product-card',
  loadChildren: () =>
  import('./product-card/product-card.component').then((m)=>m.ProductCardComponent)
  }*/



  {path:'',redirectTo:'/', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent}

];

@NgModule
({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule
{

}
