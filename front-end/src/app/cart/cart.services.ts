import { Injectable, OnInit } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { ICart } from "./ICart";


@Injectable({
    providedIn:'root'
})

export class CartServices implements OnInit {


    constructor(private http:HttpClient){}

    baseUrl:string = "http://localhost:5000/api/"

    ngOnInit(): void {

    }

    getAllCartInfo(userId:number){
      // console.log(cartid)
        return this.http.get(this.baseUrl+"Carts/"+userId);
    }

    public totalprice(){

    }

}
