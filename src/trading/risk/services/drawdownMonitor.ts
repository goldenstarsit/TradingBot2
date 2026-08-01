import type {
  RiskCheckResult,
} from "../types/risk";


export class DrawdownMonitor {


  private peakValue:
    number = 0;



  public updatePeak(
    portfolioValue: number
  ): void {


    if (
      portfolioValue >
      this.peakValue
    ) {

      this.peakValue =
        portfolioValue;

    }

  }



  public check(

    portfolioValue: number,

    maxDrawdownPercent: number

  ): RiskCheckResult {


    if (
      this.peakValue <= 0
    ) {

      return {

        allowed: true,

        reason:
          "Peak value not initialized",

      };

    }


    const drawdown =
      (
        (this.peakValue - portfolioValue)
        /
        this.peakValue
      ) * 100;



    if (
      drawdown >
      maxDrawdownPercent
    ) {

      return {

        allowed: false,

        reason:
          `Maximum drawdown exceeded: ${drawdown.toFixed(2)}%`,

      };

    }



    return {

      allowed: true,

      reason:
        `Current drawdown: ${drawdown.toFixed(2)}%`,

    };

  }

}
