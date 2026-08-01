import {
  NotificationService,
} from "./notificationService";

import type {
  Notification,
  NotificationLevel,
} from "../types/notification";



export type TradingEventType =
  | "BUY"
  | "SELL"
  | "RISK"
  | "SYSTEM";



export interface TradingEvent {

  type:
    TradingEventType;


  symbol:
    string;


  message:
    string;

}



export class TradingEventAlertService {


  constructor(

    private readonly notificationService:
      NotificationService

  ) {}



  public process(
    event: TradingEvent
  ): Notification {


    const level:
      NotificationLevel =
        event.type === "RISK"
          ? "warning"
          : event.type === "SYSTEM"
            ? "info"
            : "success";



    return this.notificationService.create(

      `${event.type} Event: ${event.symbol}`,

      event.message,

      level

    );

  }

}
