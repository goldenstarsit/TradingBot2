import {
  BacktestingManager,
} from "../backtesting";

import type {
  HistoricalCandle,
} from "../backtesting";



export class TradingBacktestingIntegration {


  constructor(

    private readonly backtestingManager:
      BacktestingManager

  ) {}



  public run(

    candles:
      HistoricalCandle[]

  ) {


    return this.backtestingManager.run(
      candles
    );

  }

}
