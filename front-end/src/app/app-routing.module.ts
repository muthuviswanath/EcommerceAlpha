import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductCardComponent } from './product-card/product-card.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'product-card',component:ProductCardComponent}
/*
  {path:'product-card',
  loadChildren: () => 
  import('./product-card/product-card.component').then((m)=>m.ProductCardComponent)
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
