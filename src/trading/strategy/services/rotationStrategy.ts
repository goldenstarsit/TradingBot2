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


    void context;


    return null;

  }

}
