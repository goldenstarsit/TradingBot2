import type {
  Strategy,
} from "../types/strategy";

import type {
  TradingContext,
  TradingSignal,
} from "../../engine";


export abstract class BaseStrategy
  implements Strategy {

  public abstract readonly name: string;


  public abstract evaluate(
    context: TradingContext
  ): TradingSignal | null;

}
