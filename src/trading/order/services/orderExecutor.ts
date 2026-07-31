import type {
  Order,
  OrderResult,
} from "../types/order";


export class OrderExecutor {


  public async execute(
    order: Order
  ): Promise<OrderResult> {


    return {

      order,

      status:
        "PENDING",

      message:
        "Order execution layer ready",

    };

  }

}
