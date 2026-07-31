import type {
  TradingStrategy,
} from "../types/tradingStrategy";

import type {
  TradingContext,
  TradingSignal,
} from "../../engine/types/trading";


const PROFIT_TARGET =
  1.0;


export class RotationStrategy
  implements TradingStrategy {


  public evaluate(
    context: TradingContext
  ): TradingSignal | null {


    if (
      context.differencePercent < 0
    ) {

      return {

        symbol: context.symbol,
        side: "BUY",
        price: context.currentPrice,
        timestamp: Date.now(),
        reason: "Negative price variation",

      };

    }


    if (
      context.differencePercent >=
      PROFIT_TARGET
    ) {

      return {

        symbol: context.symbol,
        side: "SELL",
        price: context.currentPrice,
        timestamp: Date.now(),
        reason: "Profit target reached",

      };

    }


    return null;

  }

}
