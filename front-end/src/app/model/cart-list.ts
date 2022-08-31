import { IProduct } from "../IProduct";

export interface ICartItem {
  address: string;
  cartId: number;
  cartTotal: number;
  price: number;
  product: IProduct;
  userId: number;
  userName: string;
  quantity?: number;
}
