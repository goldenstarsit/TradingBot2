export interface ProfitAnalytics {

  grossProfit:
    number;


  grossLoss:
    number;


  netProfit:
    number;


  returnPercent:
    number;

}



export interface ProfitTrade {

  profit:
    number;

}



export class ProfitAnalyticsService {


  public calculate(

    trades: ProfitTrade[],

    initialCapital: number

  ): ProfitAnalytics {


    let grossProfit =
      0;


    let grossLoss =
      0;



    for (
      const trade of trades
    ) {


      if (
        trade.profit > 0
      ) {

        grossProfit +=
          trade.profit;

      } else if (
        trade.profit < 0
      ) {

        grossLoss +=
          Math.abs(
            trade.profit
          );

      }

    }



    const netProfit =
      grossProfit - grossLoss;



    const returnPercent =
      initialCapital > 0
        ? (netProfit / initialCapital) * 100
        : 0;



    return {

      grossProfit,

      grossLoss,

      netProfit,

      returnPercent,

    };

  }

}
