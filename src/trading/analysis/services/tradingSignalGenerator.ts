import type {
  MarketAnalysis,
} from "../types/marketAnalysis";


export type TradingSignal =
  "BUY" |
  "SELL" |
  "HOLD";


export interface TradingSignalResult {


  signal:
    TradingSignal;


  analysis:
    MarketAnalysis;


}


export class TradingSignalGenerator {


  public generate(
    analysis: MarketAnalysis
  ): TradingSignalResult {


    let signal:
      TradingSignal =
        "HOLD";


    if (
      analysis.variation < 0
    ) {

      signal =
        "BUY";

    }
    else if (
      analysis.variation > 0
    ) {

      signal =
        "SELL";

    }


    return {

      signal,

      analysis,

    };

  }

}
