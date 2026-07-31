import {
  TradingCoordinator,
} from "../coordinator";

import {
  OrderBuilder,
  OrderExecutor,
} from "../order";

import type {
  OrderResult,
} from "../order";


import type {
  TradingContext,
} from "../engine";


export class TradingExecutor {


  constructor(

    private readonly coordinator:
      TradingCoordinator,

    private readonly orderBuilder:
      OrderBuilder,

    private readonly orderExecutor:
      OrderExecutor

  ) {}


  public async execute(
    context: TradingContext,
    quantity: number
  ): Promise<OrderResult | null> {


    const signal =
      this.coordinator.evaluate(
        context
      );


    if (!signal) {

      return null;

    }


    const order =
      this.orderBuilder.build(
        signal,
        quantity
      );


    return this.orderExecutor.execute(
      order
    );

  }

}
