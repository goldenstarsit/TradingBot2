export interface PricePoint {


  price:
    number;


  timestamp:
    number;


}


export class TimeWindowAnalyzer {


  private readonly window:
    number;


  private readonly prices:
    PricePoint[];


  constructor(
    windowMs: number
  ) {

    this.window =
      windowMs;

    this.prices =
      [];

  }


  public addPrice(
    price: number
  ): void {


    this.prices.push({

      price,

      timestamp:
        Date.now(),

    });


    this.cleanup();

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
          point
        ) =>
          sum + point.price,
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


  private cleanup(): void {


    const limit =
      Date.now() -
      this.window;


    while (
      this.prices.length > 0 &&
      this.prices[0].timestamp < limit
    ) {

      this.prices.shift();

    }

  }

}
