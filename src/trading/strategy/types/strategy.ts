import type {
  TradingContext,
  TradingSignal,
} from "../../engine";


export interface Strategy {

  readonly name: string;


  evaluate(
    context: TradingContext
  ): TradingSignal | null;

}
