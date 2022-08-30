import { Injectable, OnInit } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import  {IProduct} from "./IProduct";


@Injectable({

    providedIn:'root'

})

export class ProductServices implements OnInit {



    constructor(private http:HttpClient){}

    baseUrl:string = "http://localhost:5000/api/"

    ngOnInit(): void {

    }

    getAllEmpInfo():Observable<IProduct[]>{

        return this.http.get<IProduct[]>(this.baseUrl+"Products");
    }
    SearchProduct(SearchString : string, lowprice: number, highprice : number, sortby:string) : Observable<IProduct[] >
    {  
        if((lowprice==null && highprice==null) || (lowprice==0 && highprice==0))
        {
            lowprice=0;
            highprice=1000000;
        }
        if(SearchString==null || SearchString=="")
        {
            SearchString="not_defined";
        }
        if(sortby==null || sortby=="")
        {
            sortby="not_defined";
        }
        return this.http.get<IProduct[]>(`http://localhost:5000/api/Products/${SearchString}/${lowprice}/${highprice}/${sortby}`);

        
        
    }

}
