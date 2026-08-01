import {
  NotificationService,
} from "./notificationService";

import {
  AlertStorageService,
} from "./alertStorageService";

import type {
  NotificationLevel,
} from "../types/notification";



export class NotificationManager {


  private readonly notificationService:
    NotificationService;


  private readonly storageService:
    AlertStorageService;



  constructor() {


    this.notificationService =
      new NotificationService();


    this.storageService =
      new AlertStorageService();

  }



  public notify(

    title: string,

    message: string,

    level: NotificationLevel

  ) {


    const notification =
      this.notificationService.create(

        title,

        message,

        level

      );


    this.storageService.save(
      notification
    );


    return notification;

  }



  public getNotifications() {


    return this.storageService.getAll();

  }



  public getNotificationService() {


    return this.notificationService;

  }



  public getStorageService() {


    return this.storageService;

  }

}
