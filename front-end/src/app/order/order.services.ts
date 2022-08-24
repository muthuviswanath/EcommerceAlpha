import { Injectable, OnInit } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { IOrder } from "./IOrder";


@Injectable({

    providedIn:'root'

})

export class OrderServices implements OnInit {



    constructor(private http:HttpClient){}

    baseUrl:string = "http://localhost:5000/api/"

    ngOnInit(): void {

    }

    getAllOrderInfo():Observable<IOrder[]>{

        return this.http.get<IOrder[]>(this.baseUrl+"Orders");


    }

}
