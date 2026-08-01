import {
  updateTradingFrontendState,
} from "../frontend/tradingStateAdapter";



export class TradingEngineBootstrap {


  private initialized = false;



  public initialize() {


    if (this.initialized) {

      return;

    }



    this.initialized = true;



    updateTradingFrontendState({

      botRunning: true,

      marketConnected: true,

    });


  }



  public shutdown() {


    updateTradingFrontendState({

      botRunning: false,

      marketConnected: false,

    });


  }


}



export const tradingEngineBootstrap =

  new TradingEngineBootstrap();
