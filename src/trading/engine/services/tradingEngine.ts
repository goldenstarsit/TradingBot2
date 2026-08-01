import type {
  TradingContext,
  TradingSignal,
} from "../types/trading";

import {
  DefaultStrategyManager,
} from "../../strategy";

import {
  PortfolioManager,
} from "../../portfolio";


export class TradingEngine {


  private readonly strategyManager =
    new DefaultStrategyManager();


  private readonly portfolio =
    new PortfolioManager();


  public evaluate(
    context: TradingContext
  ): TradingSignal | null {


    void this.portfolio;


    const strategy =
      this.strategyManager.getActive();


    return strategy.evaluate(
      context
    );

  }

}
