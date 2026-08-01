import type {
  Order,
  OrderSide,
} from "../types/order";

import {
  OrderFactory,
} from "./orderFactory";

import {
  OrderValidator,
} from "./orderValidator";

import {
  OrderExecutor,
} from "./orderExecutor";

import {
  OrderHistoryManager,
} from "./orderHistoryManager";


export class OrderManager {


  private readonly factory =
    new OrderFactory();


  private readonly validator =
    new OrderValidator();


  private readonly executor =
    new OrderExecutor();


  private readonly history =
    new OrderHistoryManager();



  public async createAndExecute(

    symbol: string,

    side: OrderSide,

    quantity: number,

    price: number

  ): Promise<Order> {


    const order =
      this.factory.create(
        symbol,
        side,
        quantity,
        price
      );


    const validation =
      this.validator.validate(
        order
      );


    if (
      !validation.valid
    ) {

      throw new Error(
        validation.reason
      );

    }


    const result =
      await this.executor.execute(
        order
      );


    this.history.add(
      result.order
    );


    return result.order;

  }



  public getHistory() {

    return this.history.getAll();

  }

}
