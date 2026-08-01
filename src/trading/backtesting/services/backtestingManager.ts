import {
  HistoricalDataLoader,
} from "./historicalDataLoader";

import {
  IndicatorEngine,
} from "./indicatorEngine";

import {
  BacktestExecutionEngine,
} from "./backtestExecutionEngine";

import {
  StrategyOptimizationService,
} from "./strategyOptimizationService";

import type {
  HistoricalCandle,
} from "./historicalDataLoader";



export class BacktestingManager {


  private readonly loader =
    new HistoricalDataLoader();


  private readonly indicators =
    new IndicatorEngine();


  private readonly execution =
    new BacktestExecutionEngine();


  private readonly optimization =
    new StrategyOptimizationService();



  public run(
    candles: HistoricalCandle[]
  ) {


    const historicalData =
      this.loader.load(
        candles
      );


    const indicatorSnapshot =
      this.indicators.calculate(
        historicalData
      );


    const trades =
      this.execution.execute(
        historicalData
      );


    return {

      indicatorSnapshot,

      trades,

      optimizer:
        this.optimization,

    };

  }

}
