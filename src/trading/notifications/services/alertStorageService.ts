import type {
  Notification,
} from "../types/notification";



export class AlertStorageService {


  private alerts:
    Notification[] = [];



  public save(
    alert: Notification
  ): void {


    this.alerts.push(
      alert
    );

  }



  public getAll():
    Notification[] {


    return [
      ...this.alerts
    ];

  }



  public getByLevel(
    level: Notification["level"]
  ):
    Notification[] {


    return this.alerts.filter(

      alert =>
        alert.level === level

    );

  }



  public clear(): void {


    this.alerts = [];

  }

}
