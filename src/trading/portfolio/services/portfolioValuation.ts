import type {
  Position,
} from "../types/portfolio";


export class PortfolioValuation {


  public calculate(

    balance: number,

    positions: readonly Position[],

    prices:
      Readonly<Record<string, number>>

  ): number {


    let total =
      balance;


    for (
      const position
      of positions
    ) {

      const price =
        prices[
          position.symbol
        ];


      if (
        price === undefined
      ) {

        continue;

      }


      total +=
        position.quantity *
        price;

    }


    return total;

  }

}
