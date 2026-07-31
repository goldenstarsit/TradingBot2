import type {
  Exchange,
} from "../types/exchange";

import type {
  PriceTick,
} from "../../marketData";

import {
  BinancePriceProvider,
} from "../services/binancePriceProvider";


export class BinanceAdapter implements Exchange {

  public readonly name =
    "Binance";


  private readonly priceProvider:
    BinancePriceProvider;


  constructor() {

    this.priceProvider =
      new BinancePriceProvider();

  }


  public async connect(): Promise<void> {

    return;

  }


  public async disconnect(): Promise<void> {

    return;

  }


  public async getPrice(
    symbol: string
  ): Promise<number> {

    return this.priceProvider.getPrice(
      symbol
    );

  }


  public async subscribePrice(
    symbol: string,
    callback: (
      tick: PriceTick
    ) => void
  ): Promise<void> {

    const price =
      await this.getPrice(
        symbol
      );


    callback({

      symbol,

      price,

      timestamp:
        Date.now(),

    });

  }

}
