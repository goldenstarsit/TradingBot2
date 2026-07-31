export class WebSocketHealthMonitor {


  private connected:
    boolean;


  private lastMessageTime:
    number;


  constructor() {

    this.connected =
      false;

    this.lastMessageTime =
      0;

  }


  public connectedStatus(): void {

    this.connected =
      true;

    this.lastMessageTime =
      Date.now();

  }


  public disconnectedStatus(): void {

    this.connected =
      false;

  }


  public messageReceived(): void {

    this.lastMessageTime =
      Date.now();

  }


  public isHealthy(
    timeout: number = 30000
  ): boolean {


    if (!this.connected) {

      return false;

    }


    return (
      Date.now() -
      this.lastMessageTime
    ) < timeout;

  }


  public getLastMessageTime():
    number {

    return this.lastMessageTime;

  }


  public isConnected():
    boolean {

    return this.connected;

  }

}
