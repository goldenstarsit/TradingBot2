import {
  BotControlManager,
  RuntimeConfigurationService,
} from "../configuration";

import type {
  BotConfiguration,
} from "../configuration";



export class TradingBotControlIntegration {


  constructor(

    private readonly botControlManager:
      BotControlManager,

    private readonly runtimeConfigurationService:
      RuntimeConfigurationService

  ) {}



  public start():

    void {


    this.botControlManager.start();

  }



  public stop():

    void {


    this.botControlManager.stop();

  }



  public restart():

    void {


    this.botControlManager.restart();

  }



  public status():

    boolean {


    return this.botControlManager.status();

  }



  public updateConfiguration(

    configuration:
      Partial<BotConfiguration>

  ): BotConfiguration {


    return this.runtimeConfigurationService.update(
      configuration
    );

  }

}
