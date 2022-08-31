import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IWishlist } from './IWishlist';
import { IWishlistItem } from '../model/wishlist-list-dto';

@Injectable({
  providedIn: 'root',
})
export class WishlistServices implements OnInit {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'http://localhost:5000/api/';

  ngOnInit(): void {}

  getAllWishlistInfo(userid): Observable<IWishlistItem[]> {
    // console.log(cartid)
    return this.http.get<IWishlistItem[]>(
      this.baseUrl + 'Wishlists/User/' + userid
    );
  }
  public addToWishlistTable(data: any) {
    const httpoptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
      }),

    };

    return this.http.post(this.baseUrl + 'Wishlists', data, httpoptions);
  }
}
