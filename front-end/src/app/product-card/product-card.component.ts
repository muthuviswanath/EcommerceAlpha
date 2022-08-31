import { Component, OnInit } from '@angular/core';
import { IProduct } from './IProduct';
import { ProductServices } from './product.services';
import { ReactiveFormsModule, Validators, FormBuilder, FormControl, FormGroup,Form } from '@angular/forms';
import { CartServices } from '../cart/cart.services';
import { WishlistServices } from '../wishlist/wishlist.services';
import { ICartItem } from '../model/cart-list';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  public sessionStorage = sessionStorage;
  productList:IProduct[];
  modalOpen = false;
  model: any = {};
  model1: any = {};
  constructor(
    private service: ProductServices,
    private cartservice: CartServices,
    private wishlistservice: WishlistServices
  ) {}

  ngOnInit(): void {
    this.service.getAllProdInfo().subscribe((res) => (this.productList = res));
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



  public submitToCart(prdid: any): void {
    this.model.productId = prdid;
    this.model.userId = 2;
    this.model.cartTotal = 1;

    this.cartservice.addToCartTable(this.model).subscribe((res) => {});

    alert('Added to Cart !');

  }
  public submitToWishlist(prdid: any): void {
    this.model1.productId = prdid;

    this.model1.userId = 2;

    this.wishlistservice.addToWishlistTable(this.model1).subscribe((res) => {});
    alert('Added to Wishlist !');
  }

}
