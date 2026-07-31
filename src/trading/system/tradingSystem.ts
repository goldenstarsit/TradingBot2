import {
  WebSocketRuntimeManager,
} from "../websocket";

import {
  BinanceSocketClient,
} from "../websocket";


export class TradingSystem {


  private readonly websocketRuntime:
    WebSocketRuntimeManager;


  constructor() {


    const socketClient =
      new BinanceSocketClient();


    this.websocketRuntime =
      new WebSocketRuntimeManager(
        socketClient
      );

  }


  public start(
    symbols: string[]
  ): void {


    this.websocketRuntime.start(
      symbols
    );

  }


  public stop(): void {


    this.websocketRuntime.stop();

  }


  public isRunning():
    boolean {

    return this.websocketRuntime.isRunning();

  }


}
