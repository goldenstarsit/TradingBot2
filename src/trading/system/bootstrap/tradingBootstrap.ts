import {
  TradingSystem,
} from "../tradingSystem";

import {
  defaultTradingConfig,
} from "../config/tradingConfig";

import {
  MarketDataManager,
} from "../../marketData";


export class TradingBootstrap {


  private readonly system:
    TradingSystem;


  constructor() {


    const marketData =
      new MarketDataManager();


    this.system =
      new TradingSystem(
        marketData
      );

  }


  public start(): void {


    this.system.start(
      defaultTradingConfig.symbols
    );

  }


  public stop(): void {


    this.system.stop();

  }


  public isRunning():
    boolean {

    return this.system.isRunning();

  }


}
