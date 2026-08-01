import type {
  RiskCheckResult,
} from "../types/risk";


export class PositionRiskCalculator {


  public calculate(

    positionSize: number,

    accountBalance: number

  ): RiskCheckResult {


    if (
      accountBalance <= 0
    ) {

      return {

        allowed: false,

        reason:
          "Invalid account balance",

      };

    }


    const riskPercent =
      (positionSize / accountBalance) * 100;


    return {

      allowed:
        riskPercent <= 100,

      reason:
        `Position risk: ${riskPercent.toFixed(2)}%`,

    };

  }

}
