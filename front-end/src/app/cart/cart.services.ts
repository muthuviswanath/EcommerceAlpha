import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICart } from './ICart';
import { ICartItem } from '../model/cart-list';

@Injectable({
  providedIn: 'root',
})
export class CartServices implements OnInit {
  // userid: number = 2;
  constructor(private http: HttpClient) {}

  baseUrl: string = 'http://localhost:5000/api/';

  ngOnInit(): void {}

  getAllCartInfo(userid): Observable<ICartItem[]> {
    // console.log(cartid)
    return this.http.get<ICartItem[]>(this.baseUrl + 'Carts/User/' + userid);
  }
  deleteCartItem(cartid: number) {
    return this.http.delete(this.baseUrl + 'Carts/' + cartid);
  }
  editShoppingCartProduct(cartId: number, data: any) {
    return this.http.put(this.baseUrl + 'Carts/' + cartId, data);
  }
  public addToCartTable(data: any) {
    const httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
      }),
    };

    return this.http.post(this.baseUrl + 'Carts', data, httpoptions);
  }

  public checkoutShoppingCartProducts(data:any){
    const httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
      }),
    };

    return this.http.post(this.baseUrl + 'Orders', data, httpoptions);

  }
}
