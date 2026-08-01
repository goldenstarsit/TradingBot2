import {
  NotificationService,
} from "./notificationService";

import {
  AlertRuleEngine,
} from "./alertRuleEngine";

import {
  TradingEventAlertService,
} from "./tradingEventAlertService";

import type {
  TradingEvent,
} from "./tradingEventAlertService";



export class AlertManager {


  private readonly notificationService:
    NotificationService;


  private readonly ruleEngine:
    AlertRuleEngine;


  private readonly tradingEventService:
    TradingEventAlertService;



  constructor() {


    this.notificationService =
      new NotificationService();


    this.ruleEngine =
      new AlertRuleEngine();


    this.tradingEventService =
      new TradingEventAlertService(
        this.notificationService
      );

  }



  public processTradingEvent(

    event: TradingEvent

  ) {


    return this.tradingEventService.process(
      event
    );

  }



  public evaluateRules() {


    return this.ruleEngine.evaluate();

  }



  public getNotifications() {


    return this.notificationService.getAll();

  }



  public getNotificationService() {


    return this.notificationService;

  }



  public getRuleEngine() {


    return this.ruleEngine;

  }

}
