export interface RiskProfile {

  maxPositionSize:
    number;


  maxExposure:
    number;


  maxLossPercent:
    number;

}


export interface RiskCheckResult {

  allowed:
    boolean;


  reason:
    string;

}
