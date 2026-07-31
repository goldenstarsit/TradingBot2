import type {
  PriceTick,
} from "../types/price";

import {
  PriceStore,
} from "./priceStore";

import {
  RollingHistory,
} from "./rollingHistory";

import {
  PriceAnalyzer,
} from "./priceAnalyzer";

import {
  RankingService,
} from "./rankingService";

import type {
  PriceAnalysis,
} from "./priceAnalyzer";

import type {
  PriceRanking,
} from "./rankingService";

export class MarketDataManager {

  private readonly priceStore: PriceStore;

  private readonly history: RollingHistory;

  private readonly analyzer: PriceAnalyzer;

  private readonly ranking: RankingService;


  constructor() {

    this.priceStore =
      new PriceStore();

    this.history =
      new RollingHistory();

    this.analyzer =
      new PriceAnalyzer(
        this.history
      );

    this.ranking =
      new RankingService();

  }


  public update(
    tick: PriceTick
  ): void {

    this.priceStore.update(
      tick
    );

    this.history.add(
      tick
    );

  }


  public analyze(
    symbol: string
  ): PriceAnalysis | null {

    const state =
      this.priceStore.get(
        symbol
      );

    if (!state) {
      return null;
    }

    return this.analyzer.analyze(
      symbol,
      state.currentPrice
    );

  }


  public rank(): PriceRanking[] {

    const analyses =
      this.priceStore
        .getAll()
        .map(
          (item) =>
            this.analyzer.analyze(
              item.symbol,
              item.currentPrice
            )
        )
        .filter(
          (
            item
          ): item is PriceAnalysis =>
            item !== null
        );

    return this.ranking.rank(
      analyses
    );

  }


  public getStore(): PriceStore {

    return this.priceStore;

  }


  public getHistory(): RollingHistory {

    return this.history;

  }

}
