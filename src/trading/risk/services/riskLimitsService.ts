import type {
  RiskProfile,
} from "../types/risk";


export class RiskLimitsService {


  private profile:
    RiskProfile;



  constructor(
    profile: RiskProfile
  ) {

    this.profile =
      profile;

  }



  public getLimits():
    RiskProfile {

    return this.profile;

  }



  public updateLimits(
    profile: RiskProfile
  ): void {

    this.profile =
      profile;

  }



  public getMaxPositionSize():
    number {

    return this.profile.maxPositionSize;

  }



  public getMaxExposure():
    number {

    return this.profile.maxExposure;

  }



  public getMaxLossPercent():
    number {

    return this.profile.maxLossPercent;

  }

}
