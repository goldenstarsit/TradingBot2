import type {
  RiskCheckResult,
} from "../types/risk";


export class ExposureManager {


  public check(

    currentExposure: number,

    newExposure: number,

    maxExposure: number

  ): RiskCheckResult {


    const totalExposure =
      currentExposure + newExposure;


    if (
      totalExposure >
      maxExposure
    ) {

      return {

        allowed: false,

        reason:
          "Maximum exposure limit exceeded",

      };

    }


    return {

      allowed: true,

      reason:
        `Exposure accepted: ${totalExposure}`,

    };

  }

}
