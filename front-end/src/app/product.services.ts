import { Injectable, OnInit } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import  {IProduct} from "./IProduct";


@Injectable({

    providedIn:'root'

})

export class ProductServices implements OnInit 
{

    constructor(private http:HttpClient){}

    baseUrl:string = "http://localhost:5000"

    ngOnInit(): void {

    }

    getAllEmpInfo():Observable<IProduct[]>
    {
        return this.http.get<IProduct[]>(this.baseUrl+"Products");
    }

    LoginUser(loginInfo : Array<string>)
    {
        return this.http.post
        (
            this.baseUrl+ '/api/Users/' +'LoginUser',
            {userName : loginInfo[0], password :loginInfo[1] },
            {responseType : 'text',}
        )
    }

}
