import { Component, OnInit } from '@angular/core';
import { IProduct } from './product-card/IProduct';
import { ProductServices } from './product-card/product.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'WalkAbout';
  productList:IProduct[];
  constructor(private service:ProductServices){}

  ngOnInit(): void {

    this.service.getAllProdInfo().subscribe(

      res => this.productList = res

    );

  }
}
