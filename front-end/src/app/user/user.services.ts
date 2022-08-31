import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { IUser } from "./IUser";

@Injectable({
  providedIn: "root",
})
export class UserServices implements OnInit {
  constructor(private http: HttpClient) {}

  baseUrl: string = "http://localhost:5000/api/";
  public data: any = {};

  ngOnInit(): void {}

  public fetchUserList(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.baseUrl + "Users"}`);
  }
  public addUserData(data: any) {
    const httpoptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json; charset=utf-8",
      }),
    };

    return this.http.post(this.baseUrl + "Users", data, httpoptions);
  }
  
  getUserId(username: string):Observable<IUser>
  {
    return this.http.get<IUser>(this.baseUrl+"Users/"+ username);
  }
 
}
