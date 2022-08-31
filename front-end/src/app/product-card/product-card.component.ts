import { Component, OnInit } from '@angular/core';
import { IProduct } from './IProduct';
import { ProductServices } from './product.services';
import { CartServices } from '../cart/cart.services';
import { FormControl, FormGroup } from '@angular/forms';
import { WishlistServices } from '../wishlist/wishlist.services';
import { ICartItem } from '../model/cart-list';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  productList: IProduct[];

  modalOpen = false;
  model: any = {};
  model1: any = {};
  constructor(
    private service: ProductServices,
    private cartservice: CartServices,
    private wishlistservice: WishlistServices
  ) {}

  ngOnInit(): void {
    this.service.getAllEmpInfo().subscribe((res) => (this.productList = res));
  }

  ProductSearch = new FormGroup({
    SearchString: new FormControl(),
  });

  Search(): void {
    this.service
      .SearchProduct(this.ProductSearch.value.SearchString)
      .subscribe((res) => (this.productList = res));
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
