export type OrderSide =
  | "BUY"
  | "SELL";


export type OrderStatus =
  | "PENDING"
  | "EXECUTED"
  | "FAILED";


export interface Order {

  readonly symbol: string;

  readonly side: OrderSide;

  readonly quantity: number;

  readonly price: number;

  readonly timestamp: number;

}


export interface OrderResult {

  readonly order: Order;

  readonly status: OrderStatus;

  readonly message: string;

}
