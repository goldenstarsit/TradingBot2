import type {
  OptimizationReport,
  OptimizationResult,
} from "../types/optimization";



export class ReleaseOptimizationService {


  private readonly results:
    OptimizationResult[] = [];



  public apply(

    category:
      string,

    applied:
      boolean

  ): void {


    this.results.push({

      category,

      applied,

    });

  }



  public report():

    OptimizationReport {


    return {

      timestamp:
        new Date().toISOString(),

      results: [

        ...this.results,

      ],

    };

  }

}
