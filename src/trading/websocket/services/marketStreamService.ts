import {
  WebSocketManager,
} from "./websocketManager";

import {
  MarketDataManager,
} from "../../marketData";

import type {
  Ticker,
} from "../types/ticker";


export class MarketStreamService {


  constructor(

    private readonly websocket:
      WebSocketManager,

    private readonly marketData:
      MarketDataManager

  ) {}


  public start(): void {


    this.websocket.onTicker(
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


  }


}
