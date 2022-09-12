import { Component, Input, OnInit } from '@angular/core';
import { ICart } from './ICart';
import { IProduct } from '../product-card/IProduct';
import { CartServices } from './cart.services';
import { ProductServices } from '../product-card/product.services';
import { ICartItem } from '../model/cart-list';
import { IOrderHistory } from '../model/order-history-list';
import { formatDate,DatePipe,
  DATE_PIPE_DEFAULT_TIMEZONE, } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  @Input('product') product: any;
  checkout:any = {};
  public cartList:any;
  prodList: IProduct[];
  name: string;
  public total: number = 0;
  j = 0;
  userid = Number(sessionStorage.getItem('UserID'));

  date= new Date();
  tax : number = 30.25;


  constructor(
    private cartService: CartServices,
    private productService: ProductServices,
    private router:Router
  ) {}

  ngOnInit(): void {
    // this.cartService.getAllCartInfo(this.userid).subscribe((x) => {
    // this.cartlistall = x;
    //this.cartList =this.cartlistall;

    this.cartService.getAllCartInfo(this.userid).subscribe((res) => {
      console.log(res);
      this.cartList = res;
      this.cartList = this.cartList.map((item) =>
        Object.assign({}, item, { quantity: 1 })
      );
      console.log('cartlist', this.cartList);
      this.sumtotal();
      //  console.log(this.cartList.length);

      //console.log(i);
      //console.log();
      // this.sumtotal(this.cartList);
    });
  }

  deleteCart(cartid: any): void {
    //var carttid = 0;
    //carttid = this.product.cartId
    //console.log(this.product.cartId);

    this.cartService.deleteCartItem(cartid).subscribe(() => {
      window.location.reload();
    });
  }

  onIncrementCartItem(product: ICartItem): void {
    console.log('product', product);
    product.quantity++;
    if (product.quantity > 5) {
      // TODO: USE toasters / inline messages
      product.quantity=5;
      alert('ONLY 5 ITEMS ALLOWED PER PRODUCT FOR A USER');
    }

    // this.quant++;

    // if(this.quant > 5){
    //   alert("ONLY 5 ITEMS ALLOWED PER PRODUCT FOR A USER");
    //     this.quant=5;
    //     console.log(this.quant);

    // }
    this.sumtotal();
  }

  onDecrementCartItem(product: ICartItem): void
  {
    product.quantity--;
    if (product.quantity < 0) {
      // TODO: USE toasters / inline messages
      product.quantity=0;
      alert('Quantity cannot be negative');
    }

    this.sumtotal();
  }

  sumtotal()
  {
    console.log(this.total);

    this.total = this.cartList.reduce(
      (previous, current) => current.price * current.quantity + previous,
      0
    );

    if(this.total<=0)
    {
      this.total=0;
      this.tax=0;
    }
    else this.tax=30.25;




  }

  checkOut() {
    for (let i = 0; i < this.cartList.length; i++) {
      //console.log("hsdjfhdjk");
      this.checkout.userId = this.userid;
      this.checkout.productId = this.cartList[i].product.productId;
      this.checkout.orderDate = this.date;
      console.log(this.checkout);
      // this.checkout.cartTotal =
      //   this.cartList[i].quantity * this.cartList[i].product.price;
      this.cartService
        .checkoutShoppingCartProducts(this.checkout)
        .subscribe(() => {
          this.cartService
            .editShoppingCartProduct(
              this.checkout.productId,
              this.cartList[i].product
            )
            .subscribe();
          for (let i = 0; i < this.cartList.length; i++) {
            this.cartService
              .deleteCartItem(this.cartList[i].cartId)
              .subscribe(() => {
                //this.router.navigate(['/thankk-you']);
              });
          }
          window.location.reload();
        });

    }
  }
}
