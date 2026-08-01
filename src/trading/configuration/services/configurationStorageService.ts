import type {
  BotConfiguration,
} from "../types/botConfiguration";



export class ConfigurationStorageService {


  private configuration:
    BotConfiguration | null =
      null;



  public load():

    BotConfiguration | null {


    return this.configuration;

  }



  public save(

    configuration:
      BotConfiguration

  ): void {


    this.configuration =
      configuration;

  }



  public reset():

    void {


    this.configuration =
      null;

  }

}
