import type {
  MarketAnalysis,
} from "../types/marketAnalysis";


export interface RankedAsset {


  symbol:
    string;


  variation:
    number;


  rank:
    number;


}


export class AssetRankingEngine {


  public rank(
    assets: MarketAnalysis[]
  ): RankedAsset[] {


    return assets
      .sort(
        (
          a,
          b
        ) =>
          a.variation -
          b.variation
      )
      .map(
        (
          asset,
          index
        ) => ({

          symbol:
            asset.symbol,

          variation:
            asset.variation,

          rank:
            index + 1,

        })
      );

  }


  public bestCandidate(
    assets: MarketAnalysis[]
  ):
    RankedAsset | null {


    const ranked =
      this.rank(
        assets
      );


    if (
      ranked.length === 0
    ) {

      return null;

    }


    return ranked[0];

  }

}
