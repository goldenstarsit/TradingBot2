import type {
  BotConfiguration,
} from "../types/botConfiguration";



export class ConfigurationService {


  private configuration:
    BotConfiguration;



  constructor(

    configuration:
      BotConfiguration

  ) {

    this.configuration =
      configuration;

  }



  public get():

    BotConfiguration {


    return {

      ...this.configuration,

    };

  }



  public update(

    configuration:
      Partial<BotConfiguration>

  ): void {


    this.configuration = {

      ...this.configuration,

      ...configuration,

    };

  }

}
