import type {
  ProductionReadinessReport,
  ReadinessCheck,
} from "../types/productionReadiness";



export class ProductionReadinessService {


  private readonly checks:
    ReadinessCheck[] = [];



  public addCheck(

    name:
      string,

    passed:
      boolean

  ): void {


    this.checks.push({

      name,

      passed,

    });

  }



  public report():

    ProductionReadinessReport {


    const ready =

      this.checks.every(

        check => check.passed

      );


    return {

      timestamp:
        new Date().toISOString(),

      checks: [

        ...this.checks,

      ],

      ready,

    };

  }

}
