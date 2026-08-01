import {
  updateAppState,
} from "../../state/appState";



export class TradingEngineBootstrap {


  private initialized:
    boolean = false;



  public initialize():

    void {


    if (this.initialized) {

      return;

    }


    this.initialized = true;


    updateAppState({

      connected: true,

    });


  }



  public isInitialized():

    boolean {

    return this.initialized;

  }


}



export const tradingEngineBootstrap =
  new TradingEngineBootstrap();
