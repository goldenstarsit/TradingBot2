import type {
  BacktestTrade,
  BacktestResult,
} from "../types/backtest";



export class BacktestingAnalyticsService {


  public analyze(

    trades:
      BacktestTrade[]

  ): BacktestResult {


    let totalProfit = 0;

    let profitableTrades = 0;

    let losingTrades = 0;


    for (

      const trade of trades

    ) {


      const profit =

        (trade.exitPrice - trade.entryPrice) *

        trade.quantity;


      totalProfit +=
        profit;


      if (

        profit >= 0

      ) {

        profitableTrades++;

      } else {

        losingTrades++;

      }

    }


    return {

      totalTrades:
        trades.length,

      profitableTrades,

      losingTrades,

      totalProfit,

    };

  }

}
