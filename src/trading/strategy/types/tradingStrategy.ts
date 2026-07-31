import type {
  TradingContext,
  TradingSignal,
} from "../../engine/types/trading";


export interface TradingStrategy {


  evaluate(
    context: TradingContext
  ): TradingSignal | null;


}


export interface StrategyManager {


  getActive():
    TradingStrategy | null;


}
