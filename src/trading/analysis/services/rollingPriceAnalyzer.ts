export class RollingPriceAnalyzer {


  private readonly prices:
    number[];


  constructor() {

    this.prices =
      [];

  }


  public addPrice(
    price: number
  ): void {

    this.prices.push(
      price
    );

  }


  public getAverage():
    number {


    if (
      this.prices.length === 0
    ) {

      return 0;

    }


    const total =
      this.prices.reduce(
        (
          sum,
          value
        ) =>
          sum + value,
        0
      );


    return (
      total /
      this.prices.length
    );

  }


  public getCount():
    number {

    return this.prices.length;

  }


  public clear(): void {

    this.prices.length =
      0;

  }

}
