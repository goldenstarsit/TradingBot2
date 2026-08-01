export interface HistoricalCandle {

  timestamp:
    number;


  open:
    number;


  high:
    number;


  low:
    number;


  close:
    number;


  volume:
    number;

}



export class HistoricalDataLoader {


  public load(

    candles:
      HistoricalCandle[]

  ): HistoricalCandle[] {


    return [
      ...candles
    ];

  }



  public getLatest(

    candles:
      HistoricalCandle[]

  ):
    HistoricalCandle | undefined {


    return candles[
      candles.length - 1
    ];

  }



  public getPrices(

    candles:
      HistoricalCandle[]

  ):
    number[] {


    return candles.map(

      candle =>
        candle.close

    );

  }

}
