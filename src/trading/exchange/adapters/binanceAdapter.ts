import type {
  Exchange,
} from "../types/exchange";

import type {
  PriceTick,
} from "../../marketData";


export class BinanceAdapter implements Exchange {

  public readonly name =
    "Binance";


  public async connect(): Promise<void> {

    return;

  }


  public async disconnect(): Promise<void> {

    return;

  }


  public async getPrice(
    _symbol: string
  ): Promise<number> {

    return 0;

  }


  public async subscribePrice(
    _symbol: string,
    _callback: (
      tick: PriceTick
    ) => void
  ): Promise<void> {

    return;

  }

}
