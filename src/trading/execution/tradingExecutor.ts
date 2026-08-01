import {
  TradingCoordinator,
} from "../coordinator";

import {
  OrderManager,
} from "../order";

import {
  RiskManager,
} from "../risk";

import type {
  Order,
} from "../order";

import type {
  RiskCheckResult,
} from "../risk";

import type {
  TradingContext,
} from "../engine";



export class TradingExecutor {


  constructor(

    private readonly coordinator:
      TradingCoordinator,

    private readonly orderManager:
      OrderManager,

    private readonly riskManager:
      RiskManager

  ) {}



  public async execute(

    context: TradingContext,

    quantity: number,

    accountBalance: number,

    currentExposure: number,

    portfolioValue: number

  ): Promise<Order | null> {


    const signal =
      this.coordinator.evaluate(
        context
      );


    if (!signal) {

      return null;

    }



    const order =
      await this.orderManager.createAndExecute(

        signal.symbol,

        signal.side,

        quantity,

        signal.price

      );



    const riskResult:
      RiskCheckResult =
        this.riskManager.validateTrade(

          order,

          accountBalance,

          currentExposure,

          portfolioValue

        );



    if (
      !riskResult.allowed
    ) {

      return null;

    }



    return order;

  }

}
