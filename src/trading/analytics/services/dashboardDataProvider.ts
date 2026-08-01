import {
  AnalyticsManager,
} from "./analyticsManager";

import type {
  TradeRecord,
} from "./tradePerformanceCalculator";

import type {
  StatisticsTrade,
} from "./winLossStatisticsService";

import type {
  ProfitTrade,
} from "./profitAnalyticsService";



export interface DashboardAnalyticsData {

  metrics:
    ReturnType<
      AnalyticsManager["getMetrics"]
    >;


  statistics:
    ReturnType<
      AnalyticsManager["getStatistics"]
    >;


  profit:
    ReturnType<
      AnalyticsManager["getProfitAnalytics"]
    >;


  activeTrades:
    number;

}



export class DashboardDataProvider {


  constructor(

    private readonly analytics:
      AnalyticsManager

  ) {}



  public getData(

    trades: TradeRecord[],

    statisticsTrades: StatisticsTrade[],

    profitTrades: ProfitTrade[],

    initialCapital: number

  ): DashboardAnalyticsData {


    return {

      metrics:
        this.analytics.getMetrics(
          trades
        ),


      statistics:
        this.analytics.getStatistics(
          statisticsTrades
        ),


      profit:
        this.analytics.getProfitAnalytics(
          profitTrades,
          initialCapital
        ),


      activeTrades:
        this.analytics
          .getMonitoringService()
          .getActiveTrades()
          .length,

    };

  }

}
