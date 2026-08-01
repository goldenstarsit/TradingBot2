import type {
  Order,
  OrderStatus,
} from "../types/order";


export class OrderStatusManager {


  public updateStatus(

    order: Order,

    status: OrderStatus

  ): Order {


    return {

      ...order,

      status,

    };

  }


  public isCompleted(
    order: Order
  ): boolean {

    return (
      order.status ===
      "FILLED"
    );

  }


  public isRejected(
    order: Order
  ): boolean {

    return (
      order.status ===
      "REJECTED"
    );

  }

}
