import type {
  IntegrationReport,
  IntegrationStatus,
} from "../types/integrationStatus";



export class IntegrationVerificationService {


  private readonly modules:
    IntegrationStatus[] = [];



  public register(

    module:
      string,

    ready:
      boolean

  ): void {


    this.modules.push({

      module,

      ready,

    });

  }



  public verify():

    IntegrationReport {


    return {

      timestamp:
        new Date().toISOString(),

      modules: [

        ...this.modules,

      ],

    };

  }

}
