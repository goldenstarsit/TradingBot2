import {
  VariationCalculator,
} from "./variationCalculator";

import {
  AssetRankingEngine,
} from "./assetRankingEngine";

import {
  TradingSignalGenerator,
} from "./tradingSignalGenerator";

import type {
  MarketAnalysis,
} from "../types/marketAnalysis";


export class MarketAnalysisPipeline {


  constructor(

    private readonly variationCalculator =
      new VariationCalculator(),

    private readonly rankingEngine =
      new AssetRankingEngine(),

    private readonly signalGenerator =
      new TradingSignalGenerator()

  ) {}


  public analyze(
    analyses: MarketAnalysis[]
  ) {

    const ranked =
      this.rankingEngine.rank(
        analyses
      );


    const signals =
      analyses.map(
        analysis =>
          this.signalGenerator.generate(
            analysis
          )
      );


    return {

      ranked,

      signals,

    };

  }

}
