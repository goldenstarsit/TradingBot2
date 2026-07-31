import {
  RollingHistory,
} from "./rollingHistory";

export interface PriceAnalysis {

  readonly symbol: string;

  readonly currentPrice: number;

  readonly averagePrice: number;

  readonly differencePercent: number;

}

export class PriceAnalyzer {

  constructor(
    private readonly history: RollingHistory
  ) {}

  public analyze(
    symbol: string,
    currentPrice: number
  ): PriceAnalysis | null {

    const averagePrice =
      this.history.getAverage(symbol);

    if (averagePrice === null) {
      return null;
    }

    const differencePercent =
      (
        (currentPrice - averagePrice) /
        averagePrice
      ) * 100;

    return {
      symbol,
      currentPrice,
      averagePrice,
      differencePercent,
    };
  }

  public analyzeAll(
    prices: {
      symbol: string;
      price: number;
    }[]
  ): PriceAnalysis[] {

    return prices
      .map((item) =>
        this.analyze(
          item.symbol,
          item.price
        )
      )
      .filter(
        (item): item is PriceAnalysis =>
          item !== null
      );
  }

}
