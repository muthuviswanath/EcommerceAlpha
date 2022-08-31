import { Component, OnInit } from '@angular/core';
import { ProductServices } from '../product-card/product.services';
import { ProductCardComponent } from '../product-card/product-card.component';
import { IProduct } from '../product-card/IProduct';
import { NgModel } from '@angular/forms';


@Component
({
  selector: 'app-dummycrud',
  templateUrl: './dummycrud.component.html',
  styleUrls: ['./dummycrud.component.css']
})

export class CRUDProductComponent implements OnInit 
{

  productList:IProduct[]=[];
  model : IProduct;

  product: IProduct = 
  {
    productId:null,
    productName:'',
    quantity:null,
    price:null,
    imagePath:null,
    productDescription:'',
    productRating:null,
    productOfferPrice:null,
    productCategory:''
  }
  clickproduct : IProduct;
  constructor(private service:ProductServices){}

  ngOnInit(): void {
    this.service.getAllProdInfo().subscribe(

      res => this.productList = res

    );
  }
  GetAllProducts()
  {
    this.service.getAllProdInfo().subscribe(

      res => this.productList = res

    );
  }

  populate(product: IProduct)
  {
     this.product = product;
  }
  deleteProduct(productId : number)
  {
    this.service.DeleteProduct(productId)
    .subscribe
    (
      response=>
      {
        this.GetAllProducts();
      }
    )
  }
  onSubmitAdd()
  {
    if(this.product.productId==null)
    {
      this.service.AddProduct(this.product)
      .subscribe(
        response=>
        {
          this.GetAllProducts();
          this.product = 
          {
            productId:null,
            productName:'',
            quantity:null,
            price:null,
            imagePath:null,
            productDescription:'',
            productRating:null,
            productOfferPrice:null,
            productCategory:''
          }
        }
      )
    }
    else
    {
       this.updateProduct(this.product);
    }
   
  }

  updateProduct(product: IProduct)
  {
    this.service.UpdateProduct(product)
    .subscribe
    (
      response=>
      {this.GetAllProducts();}
    );
  }





}

