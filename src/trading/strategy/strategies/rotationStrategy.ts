import {
  BaseStrategy,
} from "../services/baseStrategy";

import type {
  TradingContext,
  TradingSignal,
} from "../../engine";


export class RotationStrategy
  extends BaseStrategy {


  public readonly name =
    "RotationStrategy";


  public evaluate(
    context: TradingContext
  ): TradingSignal | null {


    if (
      context.differencePercent >= 0
    ) {

      return null;

    }


    return {

      symbol:
        context.symbol,

      side:
        "BUY",

      price:
        context.currentPrice,

      timestamp:
        Date.now(),

      reason:
        "Rotation strategy: price below average",

    };

  }

}
