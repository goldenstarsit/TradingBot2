import type {
  PerformanceMetric,
} from "../types/performance";



export class PerformanceMonitoringService {


  private metrics:
    PerformanceMetric[] = [];



  public record(

    name:
      string,

    duration:
      number

  ): void {


    this.metrics.push({

      name,

      duration,

      timestamp:
        new Date().toISOString(),

    });

  }



  public getMetrics():

    PerformanceMetric[] {


    return [

      ...this.metrics,

    ];

  }



  public averageDuration():

    number {


    if (

      this.metrics.length === 0

    ) {

      return 0;

    }


    const total =

      this.metrics.reduce(

        (
          sum,
          metric
        ) =>

          sum + metric.duration,

        0

      );


    return total /
      this.metrics.length;

  }

}
