import type {
  MarketAnalysis,
} from "../types/marketAnalysis";


export class VariationCalculator {


  public calculate(
    symbol: string,
    currentPrice: number,
    averagePrice: number
  ): MarketAnalysis {


    const variation =
      (
        (
          currentPrice -
          averagePrice
        ) /
        averagePrice
      ) * 100;


    return {

      symbol,

      currentPrice,

      averagePrice,

      variation,

      timestamp:
        Date.now(),

    };

  }

}
