export type NotificationLevel =
  | "info"
  | "warning"
  | "error"
  | "success";



export interface Notification {

  id:
    string;


  title:
    string;


  message:
    string;


  level:
    NotificationLevel;


  createdAt:
    number;

}
