import type {
  StrategyManager,
  TradingStrategy,
} from "../types/tradingStrategy";

import {
  RotationStrategy,
} from "./rotationStrategy";


export class DefaultStrategyManager
  implements StrategyManager {


  private readonly active:
    TradingStrategy;


  constructor() {

    this.active =
      new RotationStrategy();

  }


  public getActive():
    TradingStrategy {


    return this.active;

  }

}
