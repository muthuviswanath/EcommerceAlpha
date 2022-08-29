import { Component, OnInit } from '@angular/core';
import { IProduct } from './IProduct';
import { ProductServices } from './product.services';
import { Validators, FormBuilder, FormControl, FormGroup,Form } from '@angular/forms';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  productList:IProduct[];
  modalOpen = false;
  constructor(private service:ProductServices){}

  ngOnInit(): void {
    this.service.getAllEmpInfo().subscribe(

      res => this.productList = res

    );
  }

  ProductSearch = new FormGroup
  (
   {
     SearchString : new FormControl()
   }
  );

  Search():void
  {
    this.service.SearchProduct(this.ProductSearch.value.SearchString)
    .subscribe
    (
      res => this.productList = res
    );
  }

}
