import {
  LoggerService,
  ErrorRecoveryService,
  HealthMonitoringService,
  PerformanceMonitoringService,
  FailureRecoveryManager,
} from "../reliability";



export class TradingReliabilityIntegration {


  constructor(

    private readonly logger:
      LoggerService,

    private readonly errorRecovery:
      ErrorRecoveryService,

    private readonly healthMonitoring:
      HealthMonitoringService,

    private readonly performanceMonitoring:
      PerformanceMonitoringService,

    private readonly failureRecovery:
      FailureRecoveryManager

  ) {}



  public log(

    message:
      string

  ): void {


    this.logger.info(
      message
    );

  }



  public captureError(

    message:
      string

  ): void {


    this.errorRecovery.capture(
      message,
      "high"
    );

  }



  public health() {


    return this.healthMonitoring.check();

  }



  public recordPerformance(

    name:
      string,

    duration:
      number

  ): void {


    this.performanceMonitoring.record(
      name,
      duration
    );

  }



  public recover(

    reason:
      string

  ): void {


    this.failureRecovery.recover(
      "restart",
      reason
    );

  }

}
