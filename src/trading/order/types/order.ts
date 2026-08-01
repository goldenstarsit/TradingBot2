export type OrderSide =
  | "BUY"
  | "SELL";


export type OrderStatus =
  | "PENDING"
  | "FILLED"
  | "CANCELLED"
  | "REJECTED";


export interface Order {

  id: string;

  symbol: string;

  side: OrderSide;

  quantity: number;

  price: number;

  status: OrderStatus;

  timestamp: number;

}


export interface OrderResult {

  order: Order;

  status: OrderStatus;

  message: string;

}
