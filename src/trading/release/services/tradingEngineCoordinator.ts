import {
  TradingAnalyticsIntegration,
  TradingBacktestingIntegration,
  TradingBotControlIntegration,
  TradingNotificationIntegration,
  TradingReliabilityIntegration,
} from "../../execution";

import {
  IntegrationVerificationService,
} from "./integrationVerificationService";



export class TradingEngineCoordinator {


  constructor(

    private readonly analytics:
      TradingAnalyticsIntegration,

    private readonly backtesting:
      TradingBacktestingIntegration,

    private readonly botControl:
      TradingBotControlIntegration,

    private readonly notifications:
      TradingNotificationIntegration,

    private readonly reliability:
      TradingReliabilityIntegration,

    private readonly integrationVerification:
      IntegrationVerificationService

  ) {}



  public initialize():

    void {


    this.integrationVerification.register(
      "TradingEngine",
      true
    );

  }

}
