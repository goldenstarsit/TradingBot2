import type {
  ErrorRecord,
  ErrorSeverity,
} from "../types/error";



export class ErrorRecoveryService {


  private errors:
    ErrorRecord[] = [];



  public capture(

    message:
      string,

    severity:
      ErrorSeverity,

    context?:
      Record<string, unknown>

  ): void {


    this.errors.push({

      message,

      severity,

      timestamp:
        new Date().toISOString(),

      context,

    });

  }



  public getErrors():

    ErrorRecord[] {


    return [
      ...this.errors,
    ];

  }



  public hasCriticalErrors():

    boolean {


    return this.errors.some(

      error =>
        error.severity === "critical"

    );

  }



  public clear():

    void {


    this.errors = [];

  }

}
