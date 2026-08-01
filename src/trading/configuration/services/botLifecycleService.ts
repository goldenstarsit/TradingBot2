export class BotLifecycleService {


  private running =
    false;



  public start():

    void {


    this.running =
      true;

  }



  public stop():

    void {


    this.running =
      false;

  }



  public restart():

    void {


    this.stop();

    this.start();

  }



  public isRunning():

    boolean {


    return this.running;

  }

}
