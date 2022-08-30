import { Component, Input, OnInit } from "@angular/core";
import { ICart } from "./ICart";
import { IProduct } from "../product-card/IProduct";
import { CartServices } from "./cart.services";
import { ProductServices } from "../product-card/product.services";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
 @Input('product') product:any;
  cartlistall: any;
  cartList: any;
  prodList: IProduct[];
  name: string;
  total=0;
  j=0;
  userid = 2;

  constructor(
    private cartService: CartServices,
    private productService: ProductServices
  ) {}

  ngOnInit(): void {
    // this.cartService.getAllCartInfo(this.userid).subscribe((x) => {
    // this.cartlistall = x;
    //this.cartList =this.cartlistall;

    this.cartService.getAllCartInfo(this.userid).subscribe((res) => {
     console.log(res);
     this.cartList=res;
     console.log(this.cartList.length);
     for(let i=0;i<this.cartList.length;i++){
      console.log(i);
      console.log(this.cartList[i]);
      this.sumtotal(this.cartList[i]);

     }
    });
  }

  sumtotal(cartt:any){
    this.total == 2800;
    console.log(this.total);
    return this.total;
   // this.j+=j;
    console.log("hello")
  }

  deleteCart(cartid:any):void{
    //var carttid = 0;
    //carttid = this.product.cartId
    //console.log(this.product.cartId);

    this.cartService.deleteCartItem(cartid).subscribe(() => {
      window.location.reload();
    });
  }
}
