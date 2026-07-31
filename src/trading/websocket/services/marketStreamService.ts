import {
  MarketDataManager,
} from "../../marketData";

import type {
  Ticker,
} from "../types/ticker";

import {
  BinanceSocketClient,
} from "./binanceSocketClient";


export class MarketStreamService {


  constructor(

    private readonly socketClient:
      BinanceSocketClient,

    private readonly marketData:
      MarketDataManager

  ) {}


  public start(
    symbols: string[]
  ): void {


    this.socketClient.onTicker(
      (
        ticker: Ticker
      ) => {


        this.marketData.update({

          symbol:
            ticker.symbol,

          price:
            ticker.price,

          timestamp:
            ticker.timestamp,

        });


      }
    );


    this.socketClient.connect(
      symbols
    );

  }


  public stop(): void {

    this.socketClient.disconnect();

  }

}
