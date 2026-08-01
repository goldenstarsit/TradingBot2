export interface MonitoredTrade {

  id:
    string;


  symbol:
    string;


  status:
    string;


  openedAt:
    number;


  updatedAt:
    number;

}



export class TradeMonitoringService {


  private trades:
    Map<string, MonitoredTrade> =
      new Map();



  public addTrade(
    trade: MonitoredTrade
  ): void {


    this.trades.set(
      trade.id,
      trade
    );

  }



  public updateStatus(

    id: string,

    status: string

  ): boolean {


    const trade =
      this.trades.get(id);



    if (
      !trade
    ) {

      return false;

    }



    trade.status =
      status;


    trade.updatedAt =
      Date.now();


    this.trades.set(
      id,
      trade
    );


    return true;

  }



  public getTrade(
    id: string
  ):
    MonitoredTrade | undefined {


    return this.trades.get(id);

  }



  public getActiveTrades():
    MonitoredTrade[] {


    return Array.from(
      this.trades.values()
    );

  }

}
