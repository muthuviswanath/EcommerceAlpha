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
     SearchString : new FormControl(),
     lowprice : new FormControl(),
     highprice : new FormControl(),
     sortby: new FormControl()
   }
  );

  Search():void
  {
    
    this.service.SearchProduct(this.ProductSearch.value.SearchString, 
                                  this.ProductSearch.value.lowprice, 
                                  this.ProductSearch.value.highprice,this.ProductSearch.value.sortby)
                            .subscribe
                            (
                              res => this.productList = res
                            );
  }


  getProducts() 
  {
    return this.productList.filter((product)=> product.productCategory.includes(sessionStorage.getItem('ProductCategory')));
  }

}
