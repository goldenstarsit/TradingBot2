import type {
  TradeMetrics,
} from "../types/tradeMetrics";


export interface TradeRecord {

  profit:
    number;

}



export class TradePerformanceCalculator {


  public calculate(
    trades: TradeRecord[]
  ): TradeMetrics {


    let totalProfit =
      0;


    let totalLoss =
      0;


    let winningTrades =
      0;


    let losingTrades =
      0;



    for (
      const trade of trades
    ) {


      if (
        trade.profit > 0
      ) {

        totalProfit +=
          trade.profit;

        winningTrades++;

      } else if (
        trade.profit < 0
      ) {

        totalLoss +=
          Math.abs(trade.profit);

        losingTrades++;

      }

    }



    const totalTrades =
      trades.length;


    const winRate =
      totalTrades > 0
        ? (winningTrades / totalTrades) * 100
        : 0;



    return {

      totalTrades,

      winningTrades,

      losingTrades,

      totalProfit,

      totalLoss,

      winRate,

    };

  }

}
