import {
  WebSocketRuntimeManager,
  BinanceSocketClient,
  MarketStreamService,
} from "../websocket";

import {
  MarketDataManager,
} from "../marketData";


export class TradingSystem {


  private readonly websocketRuntime:
    WebSocketRuntimeManager;


  private readonly marketStream:
    MarketStreamService;


  constructor(

    private readonly marketData:
      MarketDataManager

  ) {


    const socketClient =
      new BinanceSocketClient();


    this.marketStream =
      new MarketStreamService(
        socketClient,
        this.marketData
      );


    this.websocketRuntime =
      new WebSocketRuntimeManager(
        socketClient
      );

  }


  public start(
    symbols: string[]
  ): void {


    this.marketStream.start(
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
