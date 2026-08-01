export interface WinLossStatistics {

  totalTrades:
    number;


  winningTrades:
    number;


  losingTrades:
    number;


  averageWin:
    number;


  averageLoss:
    number;


  profitFactor:
    number;

}



export interface StatisticsTrade {

  profit:
    number;

}



export class WinLossStatisticsService {


  public calculate(
    trades: StatisticsTrade[]
  ): WinLossStatistics {


    let winningTrades =
      0;


    let losingTrades =
      0;


    let totalWin =
      0;


    let totalLoss =
      0;



    for (
      const trade of trades
    ) {


      if (
        trade.profit > 0
      ) {

        winningTrades++;

        totalWin +=
          trade.profit;

      } else if (
        trade.profit < 0
      ) {

        losingTrades++;

        totalLoss +=
          Math.abs(trade.profit);

      }

    }



    const averageWin =
      winningTrades > 0
        ? totalWin / winningTrades
        : 0;



    const averageLoss =
      losingTrades > 0
        ? totalLoss / losingTrades
        : 0;



    const profitFactor =
      totalLoss > 0
        ? totalWin / totalLoss
        : 0;



    return {

      totalTrades:
        trades.length,

      winningTrades,

      losingTrades,

      averageWin,

      averageLoss,

      profitFactor,

    };

  }

}
