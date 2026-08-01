import type {
  Order,
  OrderSide,
} from "../types/order";


export class OrderFactory {


  public create(

    symbol: string,

    side: OrderSide,

    quantity: number,

    price: number

  ): Order {


    return {

      id:
        crypto.randomUUID(),

      symbol,

      side,

      quantity,

      price,

      status:
        "PENDING",

      timestamp:
        Date.now(),

    };

  }

}
