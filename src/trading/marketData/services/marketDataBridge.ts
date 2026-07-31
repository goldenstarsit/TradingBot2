import type {
  Exchange,
} from "../../exchange";

import {
  MarketDataManager,
} from "./marketDataManager";


export class MarketDataBridge {

  constructor(

    private readonly exchange: Exchange,

    private readonly marketData:
      MarketDataManager

  ) {}


  public async updatePrice(
    symbol: string
  ): Promise<void> {

    const price =
      await this.exchange.getPrice(
        symbol
      );


    this.marketData.update({

      symbol,

      price,

      timestamp:
        Date.now(),

    });

  }


  public async updatePrices(
    symbols: string[]
  ): Promise<void> {

    for (const symbol of symbols) {

      await this.updatePrice(
        symbol
      );

    }

  }

}
