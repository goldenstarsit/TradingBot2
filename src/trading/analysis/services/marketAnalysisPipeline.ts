import {
  AssetRankingEngine,
} from "./assetRankingEngine";

import {
  TradingSignalGenerator,
} from "./tradingSignalGenerator";

import type {
  MarketAnalysis,
} from "../types/marketAnalysis";

import type {
  RankedAsset,
} from "./assetRankingEngine";

import type {
  TradingSignalResult,
} from "./tradingSignalGenerator";


export interface MarketAnalysisResult {


  ranked:
    RankedAsset[];


  signals:
    TradingSignalResult[];


}


export class MarketAnalysisPipeline {


  constructor(

    private readonly rankingEngine =
      new AssetRankingEngine(),

    private readonly signalGenerator =
      new TradingSignalGenerator()

  ) {}


  public analyze(
    analyses: MarketAnalysis[]
  ): MarketAnalysisResult {


    return {

      ranked:
        this.rankingEngine.rank(
          analyses
        ),

      signals:
        analyses.map(
          analysis =>
            this.signalGenerator.generate(
              analysis
            )
        ),

    };

  }

}
