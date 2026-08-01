import {
  ReleaseManager,
} from "./releaseManager";

import {
  ReleasePreparationService,
} from "./releasePreparationService";

import type {
  ReleasePreparation,
} from "../types/releasePreparation";



export class FinalProductionReleaseService {


  constructor(

    private readonly releaseManager:
      ReleaseManager,

    private readonly releasePreparation:
      ReleasePreparationService

  ) {}



  public release():

    ReleasePreparation {


    this.releaseManager.initialize();


    return this.releasePreparation.prepare(

      "1.0.0",

      "TradingBot production release"

    );

  }

}
