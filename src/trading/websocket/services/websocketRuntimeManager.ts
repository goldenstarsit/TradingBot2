import {
  BinanceSocketClient,
} from "./binanceSocketClient";


export class WebSocketRuntimeManager {


  private running:
    boolean;


  constructor(

    private readonly client:
      BinanceSocketClient

  ) {

    this.running =
      false;

  }


  public start(
    symbols: string[]
  ): void {


    if (this.running) {

      return;

    }


    this.running =
      true;


    this.client.connect(
      symbols
    );

  }


  public stop(): void {


    if (!this.running) {

      return;

    }


    this.running =
      false;


    this.client.disconnect();

  }


  public isRunning():
    boolean {

    return this.running;

  }


}
