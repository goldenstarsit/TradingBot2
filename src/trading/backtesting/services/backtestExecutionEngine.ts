import type {
  HistoricalCandle,
} from "./historicalDataLoader";

import type {
  BacktestTrade,
} from "../types/backtest";



export class BacktestExecutionEngine {


  public execute(

    candles:
      HistoricalCandle[]

  ): BacktestTrade[] {


    const trades:
      BacktestTrade[] = [];


    for (

      let i = 1;

      i < candles.length;

      i++

    ) {


      if (

        candles[i].close >

        candles[i - 1].close

      ) {


        trades.push({

          id:
            `${i}`,

          symbol:
            "BACKTEST",

          entryPrice:
            candles[i - 1].close,

          exitPrice:
            candles[i].close,

          quantity:
            1,

          openedAt:
            candles[i - 1].timestamp,

          closedAt:
            candles[i].timestamp,

        });

      }

    }


    return trades;

  }

}
