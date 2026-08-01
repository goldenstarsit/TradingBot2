export interface BacktestTrade {

  id:
    string;


  symbol:
    string;


  entryPrice:
    number;


  exitPrice:
    number;


  quantity:
    number;


  openedAt:
    number;


  closedAt:
    number;

}



export interface BacktestResult {

  totalTrades:
    number;


  profitableTrades:
    number;


  losingTrades:
    number;


  totalProfit:
    number;

}
