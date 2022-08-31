import { IProduct } from "../IProduct";

export interface IWishlistItem{
  wishlistid:number;
  userId:number;
  product: IProduct;
}
