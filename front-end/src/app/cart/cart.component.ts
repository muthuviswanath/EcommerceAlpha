import { Component, OnInit } from "@angular/core";
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
  cartlistall:any;
  cartList: any;
  prodList: IProduct[];
  name: string;
  userid = 3;
  constructor(
    private cartService: CartServices,
    private productService: ProductServices
  ) {}

  ngOnInit(): void {
    this.cartService.getAllCartInfo(this.userid).subscribe((x) => {
      this.cartlistall = x;
      //this.cartList =this.cartlistall;

      console.log(this.cartlistall);
     // console.log(this.cartlistall.cartId);
      //console.log(this.cartlistall.productId);
      //console.log(this.cartlistall.product.productName);


    });

  }


  /*getProductName(productId: number) {
    this.productService.getProduct(productId).subscribe((x) => {
      this.prodList = x;
    });
  }
*/
  //getProduct(productId: number) {}
}
