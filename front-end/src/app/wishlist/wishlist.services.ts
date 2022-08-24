import { Injectable, OnInit } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { IWishlist } from "./IWishlist";


@Injectable({

    providedIn:'root'

})

export class WishlistServices implements OnInit {



    constructor(private http:HttpClient){}

    baseUrl:string = "http://localhost:5000/api/"

    ngOnInit(): void {

    }

    getAllWishlistInfo():Observable<IWishlist[]>{

        return this.http.get<IWishlist[]>(this.baseUrl+"Wishlists");


    }

}
