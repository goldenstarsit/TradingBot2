import type {
  Order,
} from "../types/order";


export interface OrderValidationResult {

  valid:
    boolean;

  reason:
    string;

}


export class OrderValidator {


  public validate(
    order: Order
  ): OrderValidationResult {


    if (
      !order.symbol.trim()
    ) {

      return {

        valid: false,

        reason:
          "Symbol is required",

      };

    }


    if (
      order.quantity <= 0
    ) {

      return {

        valid: false,

        reason:
          "Quantity must be greater than zero",

      };

    }


    if (
      order.price <= 0
    ) {

      return {

        valid: false,

        reason:
          "Price must be greater than zero",

      };

    }


    return {

      valid: true,

      reason:
        "Order is valid",

    };

  }

}
