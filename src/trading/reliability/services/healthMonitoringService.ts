import type {
  HealthReport,
  HealthStatus,
} from "../types/health";



export class HealthMonitoringService {


  private services:
    Record<string, boolean> = {};



  public registerService(

    name:
      string,

    available:
      boolean

  ): void {


    this.services[name] =
      available;

  }



  public check():

    HealthReport {


    const values =
      Object.values(
        this.services
      );


    let status:
      HealthStatus =
        "healthy";


    if (

      values.some(
        value => value === false
      )

    ) {

      status =
        "degraded";

    }


    if (

      values.length === 0

    ) {

      status =
        "unhealthy";

    }


    return {

      status,

      timestamp:
        new Date().toISOString(),

      services: {

        ...this.services,

      },

    };

  }

}
