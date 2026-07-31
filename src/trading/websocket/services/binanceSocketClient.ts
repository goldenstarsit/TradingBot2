import type {
  Ticker,
} from "../types/ticker";


export class BinanceSocketClient {


  private socket:
    WebSocket | null;


  private readonly listeners:
    Array<(ticker: Ticker) => void>;


  constructor() {

    this.socket =
      null;

    this.listeners =
      [];

  }


  public connect(
    symbols: string[]
  ): void {


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

  }


  public disconnect(): void {


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
