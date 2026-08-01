import {
  NotificationManager,
} from "../notifications";

import type {
  TradingEvent,
} from "../notifications";



export class TradingNotificationIntegration {


  constructor(

    private readonly notificationManager:
      NotificationManager

  ) {}



  public handleEvent(

    event: TradingEvent

  ) {


    const level =
      event.type === "RISK"
        ? "warning"
        : event.type === "SYSTEM"
          ? "info"
          : "success";


    return this.notificationManager.notify(

      `${event.type} ${event.symbol}`,

      event.message,

      level

    );

  }

}
