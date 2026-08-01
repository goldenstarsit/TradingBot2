import {
  ConfigurationManager,
} from "./configurationManager";

import type {
  BotConfiguration,
} from "../types/botConfiguration";



export class RuntimeConfigurationService {


  constructor(

    private readonly configurationManager:
      ConfigurationManager

  ) {}



  public update(

    configuration:
      Partial<BotConfiguration>

  ): BotConfiguration {


    const current =
      this.configurationManager.get();


    const updated = {

      ...current,

      ...configuration,

    };


    return updated;

  }

}
