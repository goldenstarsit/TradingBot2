import type {
  PriceTick,
} from "../../marketData";

export interface Exchange {

  readonly name: string;

  connect(): Promise<void>;

  disconnect(): Promise<void>;

  getPrice(
    symbol: string
  ): Promise<number>;

  subscribePrice(
    symbol: string,
    callback: (
      tick: PriceTick
    ) => void
  ): Promise<void>;

}
