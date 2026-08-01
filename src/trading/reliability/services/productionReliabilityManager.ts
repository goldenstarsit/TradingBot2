import {
  LoggerService,
  ErrorRecoveryService,
  HealthMonitoringService,
  PerformanceMonitoringService,
  FailureRecoveryManager,
} from "../index";



export class ProductionReliabilityManager {


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



  public initialize():

    void {


    this.logger.info(
      "Production reliability system initialized"
    );


    this.healthMonitoring.registerService(
      "reliability",
      true
    );

  }



  public status() {


    return {

      health:
        this.healthMonitoring.check(),


      errors:
        this.errorRecovery.getErrors(),


      performance:
        this.performanceMonitoring.getMetrics(),


      recoveries:
        this.failureRecovery.getHistory(),

    };

  }

}
