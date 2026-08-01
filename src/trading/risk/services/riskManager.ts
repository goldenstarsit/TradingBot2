import type {
  Order,
} from "../../order";

import type {
  RiskCheckResult,
} from "../types/risk";

import {
  PositionRiskCalculator,
} from "./positionRiskCalculator";

import {
  TradeRiskValidator,
} from "./tradeRiskValidator";

import {
  ExposureManager,
} from "./exposureManager";

import {
  DrawdownMonitor,
} from "./drawdownMonitor";

import {
  RiskLimitsService,
} from "./riskLimitsService";



export class RiskManager {


  private readonly positionRisk =
    new PositionRiskCalculator();


  private readonly tradeValidator =
    new TradeRiskValidator();


  private readonly exposureManager =
    new ExposureManager();


  private readonly drawdownMonitor =
    new DrawdownMonitor();


  constructor(

    private readonly limits:
      RiskLimitsService

  ) {}



  public validateTrade(

    order: Order,

    accountBalance: number,

    currentExposure: number,

    portfolioValue: number

  ): RiskCheckResult {


    const profile =
      this.limits.getLimits();



    const positionCheck =
      this.positionRisk.calculate(

        order.quantity * order.price,

        accountBalance

      );


    if (
      !positionCheck.allowed
    ) {

      return positionCheck;

    }



    const tradeCheck =
      this.tradeValidator.validate(

        order,

        profile.maxPositionSize

      );


    if (
      !tradeCheck.allowed
    ) {

      return tradeCheck;

    }



    const exposureCheck =
      this.exposureManager.check(

        currentExposure,

        order.quantity * order.price,

        profile.maxExposure

      );


    if (
      !exposureCheck.allowed
    ) {

      return exposureCheck;

    }



    this.drawdownMonitor.updatePeak(
      portfolioValue
    );


    return this.drawdownMonitor.check(

      portfolioValue,

      profile.maxLossPercent

    );

  }

}
