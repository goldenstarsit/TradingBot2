import type {
  LogEntry,
  LogLevel,
} from "../types/log";



export class LoggerService {


  private logs:
    LogEntry[] = [];



  public log(

    level:
      LogLevel,

    message:
      string,

    context?:
      Record<string, unknown>

  ): void {


    this.logs.push({

      level,

      message,

      timestamp:
        new Date().toISOString(),

      context,

    });

  }



  public info(

    message:
      string,

    context?:
      Record<string, unknown>

  ): void {


    this.log(
      "info",
      message,
      context
    );

  }



  public warn(

    message:
      string,

    context?:
      Record<string, unknown>

  ): void {


    this.log(
      "warn",
      message,
      context
    );

  }



  public error(

    message:
      string,

    context?:
      Record<string, unknown>

  ): void {


    this.log(
      "error",
      message,
      context
    );

  }



  public getLogs():

    LogEntry[] {


    return [
      ...this.logs,
    ];

  }

}
