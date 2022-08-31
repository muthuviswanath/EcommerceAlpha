import { IProduct } from "../IProduct";

export interface IOrderHistory{
  orderId:number;
  userId:number;
  product:IProduct;
  orderDate:Date;
}
