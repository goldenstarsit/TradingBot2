export class ReconnectManager {


  private attempts:
    number;


  private timer:
    ReturnType<typeof setTimeout> | null;


  constructor(

    private readonly maxAttempts:
      number = 10,

    private readonly delay:
      number = 5000

  ) {

    this.attempts =
      0;

    this.timer =
      null;

  }


  public schedule(
    callback: () => void
  ): void {


    if (
      this.attempts >= this.maxAttempts
    ) {

      return;

    }


    this.timer =
      setTimeout(
        () => {


          this.attempts++;

          callback();


        },
        this.delay
      );

  }


  public reset(): void {

    this.attempts =
      0;


    if (this.timer) {

      clearTimeout(
        this.timer
      );

      this.timer =
        null;

    }

  }


  public getAttempts():
    number {

    return this.attempts;

  }

}
