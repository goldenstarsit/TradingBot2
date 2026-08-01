import {
  ConfigurationService,
} from "./configurationService";

import {
  ConfigurationStorageService,
} from "./configurationStorageService";

import type {
  BotConfiguration,
} from "../types/botConfiguration";



export class ConfigurationManager {


  constructor(

    private readonly configurationService:
      ConfigurationService,

    private readonly storageService:
      ConfigurationStorageService

  ) {}



  public load():

    BotConfiguration | null {


    const configuration =
      this.storageService.load();


    if (

      configuration

    ) {

      this.configurationService.update(
        configuration
      );

    }


    return configuration;

  }



  public save():

    void {


    this.storageService.save(

      this.configurationService.get()

    );

  }



  public get():

    BotConfiguration {


    return this.configurationService.get();

  }

}
