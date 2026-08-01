import {
  BotControlManager,
  RuntimeConfigurationService,
} from "../../configuration";

import {
  ProductionReliabilityManager,
} from "../../reliability";



export class ReleaseManager {


  constructor(

    private readonly botControl:
      BotControlManager,

    private readonly runtimeConfiguration:
      RuntimeConfigurationService,

    private readonly productionReliability:
      ProductionReliabilityManager

  ) {}



  public initialize():

    void {


    this.productionReliability.initialize();


    this.botControl.status();


    this.runtimeConfiguration.update({});

  }

}
