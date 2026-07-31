import type {
  PriceState,
  PriceTick,
} from "../types/price";

export class PriceStore {

  private readonly prices: Map<string, PriceState>;

  constructor() {
    this.prices = new Map();
  }

  public update(
    tick: PriceTick
  ): void {

    const existing = this.prices.get(
      tick.symbol
    );

    this.prices.set(
      tick.symbol,
      {
        symbol: tick.symbol,
        currentPrice: tick.price,
        previousPrice: existing?.currentPrice ?? tick.price,
        updatedAt: tick.timestamp,
      }
    );
  }

  public get(
    symbol: string
  ): PriceState | null {

    return this.prices.get(symbol) ?? null;
  }

  public getAll(): PriceState[] {

    return Array.from(
      this.prices.values()
    );
  }

}
