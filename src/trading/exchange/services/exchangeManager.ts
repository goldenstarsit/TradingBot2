import type {
  Exchange,
} from "../types/exchange";


export class ExchangeManager {

  private exchanges:
    Map<string, Exchange>;


  private activeExchange:
    Exchange | null;


  constructor() {

    this.exchanges =
      new Map();

    this.activeExchange =
      null;

  }


  public register(
    exchange: Exchange
  ): void {

    this.exchanges.set(
      exchange.name,
      exchange
    );

  }


  public async use(
    name: string
  ): Promise<void> {

    const exchange =
      this.exchanges.get(
        name
      );


    if (!exchange) {

      throw new Error(
        `Exchange not found: ${name}`
      );

    }


    if (this.activeExchange) {

      await this.activeExchange.disconnect();

    }


    await exchange.connect();


    this.activeExchange =
      exchange;

  }


  public getActive():
    Exchange | null {

    return this.activeExchange;

  }


  public get(
    name: string
  ):
    Exchange | null {

    return this.exchanges.get(name) ?? null;

  }

}
