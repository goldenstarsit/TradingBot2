import type {
  PriceTick,
} from "../types/price";

export interface PriceHistory {

  readonly symbol: string;

  readonly prices: PriceTick[];

}

export class RollingHistory {

  private readonly history: Map<string, PriceTick[]>;

  private readonly windowMs: number;

  constructor(
    windowMinutes: number = 60
  ) {
    this.history = new Map();

    this.windowMs =
      windowMinutes * 60 * 1000;
  }

  public add(
    tick: PriceTick
  ): void {

    const prices =
      this.history.get(tick.symbol) ?? [];

    prices.push(tick);

    const cutoff =
      tick.timestamp - this.windowMs;

    const filtered =
      prices.filter(
        (item) =>
          item.timestamp >= cutoff
      );

    this.history.set(
      tick.symbol,
      filtered
    );
  }

  public get(
    symbol: string
  ): PriceTick[] {

    return [
      ...(this.history.get(symbol) ?? [])
    ];
  }

  public getAverage(
    symbol: string
  ): number | null {

    const prices =
      this.history.get(symbol) ?? [];

    if (prices.length === 0) {
      return null;
    }

    const total =
      prices.reduce(
        (sum, item) =>
          sum + item.price,
        0
      );

    return total / prices.length;
  }

  public clear(): void {

    this.history.clear();

  }

}
