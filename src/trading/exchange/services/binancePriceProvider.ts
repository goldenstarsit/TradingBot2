export interface BinancePriceResponse {

  readonly symbol: string;

  readonly price: string;

}


export class BinancePriceProvider {

  private readonly baseUrl =
    "https://api.binance.com";


  public async getPrice(
    symbol: string
  ): Promise<number> {

    const response =
      await fetch(
        `${this.baseUrl}/api/v3/ticker/price?symbol=${symbol.toUpperCase()}`
      );


    if (!response.ok) {

      throw new Error(
        `Binance price request failed: ${response.status}`
      );

    }


    const data =
      await response.json() as BinancePriceResponse;


    return Number(
      data.price
    );

  }

}
