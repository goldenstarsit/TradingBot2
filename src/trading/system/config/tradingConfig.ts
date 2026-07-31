export interface TradingConfig {


  readonly symbols:
    string[];


}


export const defaultTradingConfig:
  TradingConfig = {


  symbols: [

    "BTCUSDT",
    "ETHUSDT",
    "BNBUSDT",
    "SOLUSDT",
    "XRPUSDT"

  ]


};
