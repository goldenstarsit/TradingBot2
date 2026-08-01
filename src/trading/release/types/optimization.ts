export interface OptimizationResult {

  category:
    string;


  applied:
    boolean;

}


export interface OptimizationReport {

  timestamp:
    string;


  results:
    OptimizationResult[];

}
