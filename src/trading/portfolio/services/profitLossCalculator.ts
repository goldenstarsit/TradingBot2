import type {
  Position,
} from "../types/portfolio";


export class ProfitLossCalculator {


  public calculate(

    position: Position,

    currentPrice: number

  ) {

    const unrealizedProfit =

      (currentPrice -
        position.averagePrice) *

      position.quantity;


    const profitPercent =

      position.averagePrice === 0

        ? 0

        : (

            (currentPrice -
              position.averagePrice) /

            position.averagePrice

          ) * 100;


    return {

      realizedProfit:
        0,

      unrealizedProfit,

      profitPercent,

    };

  }

}
