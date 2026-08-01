import type {
  ReleasePreparation,
} from "../types/releasePreparation";



export class ReleasePreparationService {


  public prepare(

    version:
      string,

    summary:
      string

  ): ReleasePreparation {


    return {

      version,

      buildReady:
        true,

      summary,

      timestamp:
        new Date().toISOString(),

    };

  }

}
