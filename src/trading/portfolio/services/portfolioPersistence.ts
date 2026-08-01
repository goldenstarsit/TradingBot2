import type {
  Portfolio,
} from "../types/portfolio";


export class PortfolioPersistence {


  public serialize(
    portfolio: Portfolio
  ): string {

    return JSON.stringify(
      portfolio,
      null,
      2
    );

  }


  public deserialize(
    content: string
  ): Portfolio {

    return JSON.parse(
      content
    ) as Portfolio;

  }

}
