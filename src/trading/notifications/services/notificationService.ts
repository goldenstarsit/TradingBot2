import type {
  Notification,
  NotificationLevel,
} from "../types/notification";



export class NotificationService {


  private notifications:
    Notification[] = [];



  public create(

    title: string,

    message: string,

    level: NotificationLevel

  ): Notification {


    const notification: Notification = {

      id:
        crypto.randomUUID(),

      title,

      message,

      level,

      createdAt:
        Date.now(),

    };



    this.notifications.push(
      notification
    );


    return notification;

  }



  public getAll():
    Notification[] {


    return [
      ...this.notifications
    ];

  }



  public getLatest():
    Notification | undefined {


    return this.notifications[
      this.notifications.length - 1
    ];

  }



  public clear(): void {


    this.notifications = [];

  }

}
