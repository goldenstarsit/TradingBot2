export interface PriceTick {

  readonly symbol: string;

  readonly price: number;

  readonly timestamp: number;

}

export interface PriceState {

  readonly symbol: string;

  currentPrice: number;

  previousPrice: number;

  updatedAt: number;

}
