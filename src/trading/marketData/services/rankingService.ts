import type {
  PriceAnalysis,
} from "./priceAnalyzer";

export interface PriceRanking {

  readonly symbol: string;

  readonly rank: number;

  readonly differencePercent: number;

}

export class RankingService {

  public rank(
    analyses: PriceAnalysis[]
  ): PriceRanking[] {

    return analyses
      .sort(
        (a, b) =>
          a.differencePercent -
          b.differencePercent
      )
      .map(
        (item, index) => ({
          symbol: item.symbol,
          rank: index + 1,
          differencePercent:
            item.differencePercent,
        })
      );
  }

  public bestCandidate(
    analyses: PriceAnalysis[]
  ): PriceAnalysis | null {

    if (analyses.length === 0) {
      return null;
    }

    return [
      ...analyses
    ].sort(
      (a, b) =>
        a.differencePercent -
        b.differencePercent
    )[0];
  }

}
