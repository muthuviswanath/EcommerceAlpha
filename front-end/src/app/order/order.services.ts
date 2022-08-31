import { Injectable, OnInit } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { IOrder } from "./IOrder";
import { IOrderHistory } from "../model/order-history-list";


@Injectable({

    providedIn:'root'

})

export class OrderServices implements OnInit {



    constructor(private http:HttpClient){}

    baseUrl:string = "http://localhost:5000/api/"

    ngOnInit(): void {

    }

    getAllOrderHistory(userid):Observable<IOrderHistory[]> {
      // console.log(cartid)
      return this.http.get<IOrderHistory[]>(this.baseUrl + "Orders/User/" + userid);
    }

}
