import type {
  Ticker,
} from "../types/ticker";


export class WebSocketManager {


  private connected:
    boolean;


  private listeners:
    Array<(ticker: Ticker) => void>;


  constructor() {

    this.connected =
      false;

    this.listeners =
      [];

  }


  public connect(): void {

    this.connected =
      true;

  }


  public disconnect(): void {

    this.connected =
      false;

  }


  public isConnected():
    boolean {

    return this.connected;

  }


  public onTicker(
    listener: (ticker: Ticker) => void
  ): void {

    this.listeners.push(
      listener
    );

  }


  public emitTicker(
    ticker: Ticker
  ): void {

    if (!this.connected) {

      return;

    }


    for (const listener of this.listeners) {

      listener(ticker);

    }

  }

}
