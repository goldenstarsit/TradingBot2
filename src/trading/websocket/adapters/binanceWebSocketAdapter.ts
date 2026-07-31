import type {
  Ticker,
} from "../types/ticker";

import {
  WebSocketManager,
} from "../services/websocketManager";


export class BinanceWebSocketAdapter {


  private readonly manager:
    WebSocketManager;


  constructor(
    manager: WebSocketManager
  ) {

    this.manager =
      manager;

  }


  public connect(): void {

    this.manager.connect();

  }


  public disconnect(): void {

    this.manager.disconnect();

  }


  public subscribe(
    symbols: string[]
  ): void {


    for (const symbol of symbols) {

      this.emitTestTicker(
        symbol
      );

    }

  }


  private emitTestTicker(
    symbol: string
  ): void {


    const ticker: Ticker = {

      symbol:
        symbol.toUpperCase(),

      price:
        0,

      timestamp:
        Date.now(),

    };


    this.manager.emitTicker(
      ticker
    );

  }

}
