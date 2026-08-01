import type {
  TradingSignal,
} from "../../engine";

import type {
  Order,
} from "../types/order";


export class OrderBuilder {


  public build(
    signal: TradingSignal,
    quantity: number
  ): Order {


    return {

      id:
        crypto.randomUUID(),

      symbol:
        signal.symbol,

      side:
        signal.side,

      quantity,

      price:
        signal.price,

      status:
        "PENDING",

      timestamp:
        Date.now(),

    };

  }

}
