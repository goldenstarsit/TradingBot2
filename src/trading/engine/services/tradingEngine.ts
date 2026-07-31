import type {
  TradingContext,
  TradingSignal,
} from "../types/trading";

import {
  DefaultStrategyManager,
} from "../../strategy";


export class TradingEngine {


  private readonly strategyManager =
    new DefaultStrategyManager();


  public evaluate(
    context: TradingContext
  ): TradingSignal | null {


    const strategy =
      this.strategyManager.getActive();


    return strategy.evaluate(
      context
    );

  }

}
