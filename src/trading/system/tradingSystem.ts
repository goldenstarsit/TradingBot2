import {
  ExchangeManager,
} from "../exchange";

import {
  MarketDataManager,
} from "../marketData";

import {
  StrategyManager,
  RotationStrategy,
} from "../strategy";

import {
  TradingEngine,
} from "../engine";

import {
  TradingCoordinator,
} from "../coordinator";

import {
  OrderBuilder,
  OrderExecutor,
} from "../order";

import {
  TradingExecutor,
} from "../execution";


export class TradingSystem {


  public readonly exchangeManager:
    ExchangeManager;


  public readonly marketDataManager:
    MarketDataManager;


  public readonly strategyManager:
    StrategyManager;


  public readonly tradingExecutor:
    TradingExecutor;


  constructor() {


    this.exchangeManager =
      new ExchangeManager();


    this.marketDataManager =
      new MarketDataManager();


    this.strategyManager =
      new StrategyManager();


    this.strategyManager.register(
      new RotationStrategy()
    );


    this.strategyManager.use(
      "RotationStrategy"
    );


    const engine =
      new TradingEngine(
        this.strategyManager
      );


    const coordinator =
      new TradingCoordinator(
        engine
      );


    const orderBuilder =
      new OrderBuilder();


    const orderExecutor =
      new OrderExecutor();


    this.tradingExecutor =
      new TradingExecutor(
        coordinator,
        orderBuilder,
        orderExecutor
      );

  }


  public async initialize():
    Promise<void> {

    return;

  }


  public async start():
    Promise<void> {

    return;

  }


  public async stop():
    Promise<void> {

    return;

  }

}
