import type {
  RecoveryAction,
  RecoveryRecord,
} from "../types/recovery";



export class FailureRecoveryManager {


  private history:
    RecoveryRecord[] = [];



  public recover(

    action:
      RecoveryAction,

    reason:
      string

  ): void {


    this.history.push({

      action,

      reason,

      timestamp:
        new Date().toISOString(),

    });

  }



  public getHistory():

    RecoveryRecord[] {


    return [

      ...this.history,

    ];

  }



  public lastAction():

    RecoveryRecord | null {


    if (

      this.history.length === 0

    ) {

      return null;

    }


    return this.history[
      this.history.length - 1
    ];

  }

}
