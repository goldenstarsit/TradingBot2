import type {
  TradeCardData,
} from "../../features/trading/components/TradeCard";


import type {
  PositionDetailsData,
} from "../../features/trading/components/PositionDetails";



export interface TradingFrontendState {

  botRunning: boolean;

  balance: number;

  equity: number;

  activeTrades: number;

  marketConnected: boolean;

  trades: TradeCardData[];

  positions: PositionDetailsData[];

}



type StateListener = (

  state: TradingFrontendState

) => void;



let state: TradingFrontendState = {

  botRunning: false,

  balance: 0,

  equity: 0,

  activeTrades: 0,

  marketConnected: false,

  trades: [],

  positions: [],

};



const listeners:

  StateListener[] = [];



export function getTradingFrontendState():

  TradingFrontendState {


  return {

    ...state,

  };

}



export function updateTradingFrontendState(

  update: Partial<TradingFrontendState>

):

  TradingFrontendState {


  state = {

    ...state,

    ...update,

  };



  listeners.forEach(

    listener => {

      listener({

        ...state,

      });

    }

  );



  return getTradingFrontendState();

}



export function subscribeTradingState(

  listener: StateListener

): () => void {


  listeners.push(listener);



  return () => {


    const index =

      listeners.indexOf(listener);



    if (index >= 0) {

      listeners.splice(index, 1);

    }


  };

}
