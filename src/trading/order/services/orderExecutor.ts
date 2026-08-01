import type {
  Order,
  OrderResult,
} from "../types/order";

import {
  OrderValidator,
} from "./orderValidator";


export class OrderExecutor {


  private readonly validator =
    new OrderValidator();


  public async execute(
    order: Order
  ): Promise<OrderResult> {


    const validation =
      this.validator.validate(
        order
      );


    if (
      !validation.valid
    ) {

      return {

        order,

        status:
          "REJECTED",

        message:
          validation.reason,

      };

    }


    return {

      order: {

        ...order,

        status:
          "FILLED",

      },

      status:
        "FILLED",

      message:
        "Order executed successfully",

    };

  }

}
