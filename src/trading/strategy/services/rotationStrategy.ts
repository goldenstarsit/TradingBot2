import type {
  TradingStrategy,
} from "../types/tradingStrategy";

import type {
  TradingContext,
  TradingSignal,
} from "../../engine/types/trading";


export class RotationStrategy
  implements TradingStrategy {


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
        "Negative price variation",

    };

  }

}
