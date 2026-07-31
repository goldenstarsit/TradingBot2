import type {
  Strategy,
} from "../types/strategy";


export class StrategyManager {

  private readonly strategies:
    Map<string, Strategy>;


  private activeStrategy:
    Strategy | null;


  constructor() {

    this.strategies =
      new Map();

    this.activeStrategy =
      null;

  }


  public register(
    strategy: Strategy
  ): void {

    this.strategies.set(
      strategy.name,
      strategy
    );

  }


  public use(
    name: string
  ): void {

    const strategy =
      this.strategies.get(
        name
      );


    if (!strategy) {

      throw new Error(
        `Strategy not found: ${name}`
      );

    }


    this.activeStrategy =
      strategy;

  }


  public getActive():
    Strategy | null {

    return this.activeStrategy;

  }


  public get(
    name: string
  ):
    Strategy | null {

    return this.strategies.get(name) ?? null;

  }

}
