import {
  BalanceManager,
} from "./balanceManager";

import {
  PositionManager,
} from "./positionManager";


export class PortfolioManager {


  public readonly balance =
    new BalanceManager();


  public readonly positions =
    new PositionManager();


}
