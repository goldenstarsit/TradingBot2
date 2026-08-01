import type {
  Order,
} from "../types/order";


export class OrderHistoryManager {


  private readonly history:
    Order[] =
      [];


  public add(
    order: Order
  ): void {

    this.history.push(
      order
    );

  }


  public getAll():
    readonly Order[] {

    return this.history;

  }


  public findBySymbol(
    symbol: string
  ):
    readonly Order[] {

    return this.history.filter(
      order =>
        order.symbol ===
        symbol
    );

  }


  public clear(): void {

    this.history.length =
      0;

  }

}
