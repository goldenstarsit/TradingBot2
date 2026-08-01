import type {
  TradeCardData,
} from "../components/TradeCard";


import type {
  PositionDetailsData,
} from "../components/PositionDetails";



export class TradingDataService {


  public getActiveTrades():

    TradeCardData[] {


    return [];


  }



  public getPositions():

    PositionDetailsData[] {


    return [];


  }



}



export const tradingDataService =
  new TradingDataService();
