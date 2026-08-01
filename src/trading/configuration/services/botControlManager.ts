import {
  ConfigurationManager,
} from "./configurationManager";

import {
  BotLifecycleService,
} from "./botLifecycleService";

import type {
  BotConfiguration,
} from "../types/botConfiguration";



export class BotControlManager {


  constructor(

    private readonly configurationManager:
      ConfigurationManager,

    private readonly lifecycleService:
      BotLifecycleService

  ) {}



  public start():

    void {


    this.lifecycleService.start();

  }



  public stop():

    void {


    this.lifecycleService.stop();

  }



  public restart():

    void {


    this.lifecycleService.restart();

  }



  public status():

    boolean {


    return this.lifecycleService.isRunning();

  }



  public configuration():

    BotConfiguration {


    return this.configurationManager.get();

  }

}
