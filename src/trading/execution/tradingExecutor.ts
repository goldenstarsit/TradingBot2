import {
  TradingCoordinator,
} from "../coordinator";

import {
  OrderManager,
} from "../order";

import type {
  Order,
} from "../order";

import type {
  TradingContext,
} from "../engine";


export class TradingExecutor {


  constructor(

    private readonly coordinator:
      TradingCoordinator,

    private readonly orderManager:
      OrderManager

  ) {}



  public async execute(

    context: TradingContext,

    quantity: number

  ): Promise<Order | null> {


    const signal =
      this.coordinator.evaluate(
        context
      );


    if (!signal) {

      return null;

    }


    return this.orderManager.createAndExecute(

      signal.symbol,

      signal.side,

      quantity,

      signal.price

    );

  }

}
