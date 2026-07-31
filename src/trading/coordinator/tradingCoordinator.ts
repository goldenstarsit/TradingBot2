import {
  TradingEngine,
} from "../engine";

import type {
  TradingContext,
  TradingSignal,
} from "../engine";


export class TradingCoordinator {

  constructor(
    private readonly engine:
      TradingEngine
  ) {}


  public evaluate(
    context: TradingContext
  ): TradingSignal | null {

    return this.engine.evaluate(
      context
    );

  }

}
