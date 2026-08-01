import {
  TradePerformanceCalculator,
} from "./tradePerformanceCalculator";

import {
  WinLossStatisticsService,
} from "./winLossStatisticsService";

import {
  ProfitAnalyticsService,
} from "./profitAnalyticsService";

import {
  TradeMonitoringService,
} from "./tradeMonitoringService";

import type {
  TradeRecord,
} from "./tradePerformanceCalculator";

import type {
  StatisticsTrade,
} from "./winLossStatisticsService";

import type {
  ProfitTrade,
} from "./profitAnalyticsService";

import type {
  TradeMetrics,
} from "../types/tradeMetrics";


export class AnalyticsManager {


  private readonly performance =
    new TradePerformanceCalculator();


  private readonly statistics =
    new WinLossStatisticsService();


  private readonly profit =
    new ProfitAnalyticsService();


  private readonly monitoring =
    new TradeMonitoringService();



  public getMetrics(
    trades: TradeRecord[]
  ): TradeMetrics {

    return this.performance.calculate(
      trades
    );

  }



  public getStatistics(
    trades: StatisticsTrade[]
  ) {

    return this.statistics.calculate(
      trades
    );

  }



  public getProfitAnalytics(

    trades: ProfitTrade[],

    initialCapital: number

  ) {

    return this.profit.calculate(

      trades,

      initialCapital

    );

  }



  public getMonitoringService():
    TradeMonitoringService {

    return this.monitoring;

  }

}
