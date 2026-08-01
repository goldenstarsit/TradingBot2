import type {
  HistoricalCandle,
} from "./historicalDataLoader";



export interface IndicatorSnapshot {

  prices:
    number[];


  latestPrice:
    number | null;

}



export class IndicatorEngine {


  public calculate(

    candles:
      HistoricalCandle[]

  ): IndicatorSnapshot {


    const prices =
      candles.map(
        candle => candle.close
      );


    return {

      prices,

      latestPrice:
        prices.length > 0
          ? prices[
              prices.length - 1
            ]
          : null,

    };

  }

}
