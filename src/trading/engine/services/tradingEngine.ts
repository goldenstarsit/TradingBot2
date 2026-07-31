import type {
  TradingContext,
  TradingSignal,
} from "../types/trading";


export class TradingEngine {

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
        "Price below average",

    };

  }

}
