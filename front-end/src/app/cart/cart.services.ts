import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ICart } from "./ICart";

@Injectable({
  providedIn: "root",
})
export class CartServices implements OnInit {
  userid: number = 2;
  constructor(private http: HttpClient) {}

  baseUrl: string = "http://localhost:5000/api/";

  ngOnInit(): void {}

  getAllCartInfo(userid) {
    // console.log(cartid)
    return this.http.get(this.baseUrl + "Carts/User/" + userid);
  }
  deleteCartItem(cartid:number)
  {
    return this.http.delete(this.baseUrl + "Carts/" + cartid);

  }
}
