import type {
  Ticker,
} from "../types/ticker";

import {
  ReconnectManager,
} from "./reconnectManager";


export class BinanceSocketClient {


  private socket:
    WebSocket | null;


  private readonly listeners:
    Array<(ticker: Ticker) => void>;


  private readonly reconnectManager:
    ReconnectManager;


  private symbols:
    string[];


  constructor() {

    this.socket =
      null;

    this.listeners =
      [];

    this.reconnectManager =
      new ReconnectManager();

    this.symbols =
      [];

  }


  public connect(
    symbols: string[]
  ): void {


    this.symbols =
      symbols;


    const streams =
      symbols
        .map(
          (symbol) =>
            `${symbol.toLowerCase()}@ticker`
        )
        .join("/");


    const url =
      `wss://stream.binance.com:9443/stream?streams=${streams}`;


    this.socket =
      new WebSocket(
        url
      );


    this.socket.onopen =
      () => {

        this.reconnectManager.reset();

      };


    this.socket.onmessage =
      (event) => {


        const data =
          JSON.parse(
            event.data
          );


        const ticker =
          data.data;


        if (
          !ticker ||
          !ticker.s ||
          !ticker.c
        ) {

          return;

        }


        this.emit({

          symbol:
            ticker.s,

          price:
            Number(ticker.c),

          timestamp:
            Date.now(),

        });

      };


    this.socket.onerror =
      () => {

        this.reconnect();

      };


    this.socket.onclose =
      () => {

        this.reconnect();

      };

  }


  public disconnect(): void {


    this.symbols =
      [];


    if (this.socket) {

      this.socket.close();

      this.socket =
        null;

    }

  }


  public onTicker(
    listener: (
      ticker: Ticker
    ) => void
  ): void {

    this.listeners.push(
      listener
    );

  }


  private reconnect(): void {


    if (
      this.symbols.length === 0
    ) {

      return;

    }


    this.reconnectManager.schedule(
      () => {

        this.connect(
          this.symbols
        );

      }
    );

  }


  private emit(
    ticker: Ticker
  ): void {


    for (
      const listener of this.listeners
    ) {

      listener(
        ticker
      );

    }

  }

}
