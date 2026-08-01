export type RecoveryAction =
  | "restart"
  | "shutdown"
  | "ignore";


export interface RecoveryRecord {

  action:
    RecoveryAction;


  reason:
    string;


  timestamp:
    string;

}
