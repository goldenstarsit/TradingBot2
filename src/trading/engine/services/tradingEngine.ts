import type {
  TradingContext,
  TradingSignal,
} from "../types/trading";

import type {
  StrategyManager,
} from "../../strategy";


export class TradingEngine {

  constructor(
    private readonly strategyManager:
      StrategyManager
  ) {}


  public evaluate(
    context: TradingContext
  ): TradingSignal | null {

    const strategy =
      this.strategyManager.getActive();


    if (!strategy) {

      return null;

    }


    return strategy.evaluate(
      context
    );

  }

}
