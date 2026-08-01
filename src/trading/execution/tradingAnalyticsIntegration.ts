import {
  AnalyticsManager,
} from "../analytics";

import type {
  TradeRecord,
} from "../analytics";



export class TradingAnalyticsIntegration {


  constructor(

    private readonly analytics:
      AnalyticsManager

  ) {}



  public recordTrade(
    trade: TradeRecord
  ): void {


    // Trade record storage hook.
    // Analytics consumes completed trades
    // through the analytics manager layer.

  }



  public getAnalytics() {


    return this.analytics;

  }

}
