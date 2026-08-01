import type {
  Order,
} from "../../order";

import type {
  RiskCheckResult,
} from "../types/risk";


export class TradeRiskValidator {


  public validate(
    order: Order,
    maxPositionSize: number
  ): RiskCheckResult {


    if (
      order.quantity <= 0
    ) {

      return {

        allowed: false,

        reason:
          "Invalid order quantity",

      };

    }


    if (
      order.quantity >
      maxPositionSize
    ) {

      return {

        allowed: false,

        reason:
          "Position size exceeds risk limit",

      };

    }


    return {

      allowed: true,

      reason:
        "Trade risk accepted",

    };

  }

}
