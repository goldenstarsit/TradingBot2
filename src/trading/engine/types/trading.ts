export type OrderSide =
  | "BUY"
  | "SELL";


export interface TradingSignal {

  readonly symbol: string;

  readonly side: OrderSide;

  readonly price: number;

  readonly timestamp: number;

  readonly reason: string;

}


export interface TradingContext {

  readonly symbol: string;

  readonly currentPrice: number;

  readonly differencePercent: number;

}
