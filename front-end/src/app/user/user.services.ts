import { Injectable, OnInit } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { IUser } from "./IUser";


@Injectable({

    providedIn:'root'

})

export class UserServices implements OnInit {



    constructor(private http:HttpClient){}

    baseUrl:string = "http://localhost:5000/api/"

    ngOnInit(): void {

    }

    getAllOrderInfo():Observable<IUser[]>{

        return this.http.get<IUser[]>(this.baseUrl+"Users");


    }

}
