import type {
  BacktestResult,
} from "../types/backtest";



export interface StrategyConfiguration {

  id:
    string;


  name:
    string;


  parameters:
    Record<string, number>;

}



export class StrategyOptimizationService {


  public selectBest(

    results: Array<{

      configuration:
        StrategyConfiguration;

      result:
        BacktestResult;

    }>

  ) {


    return results.reduce(

      (best, current) =>

        current.result.totalProfit >

        best.result.totalProfit

          ? current

          : best

    );

  }

}
