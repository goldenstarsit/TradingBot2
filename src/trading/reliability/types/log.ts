export type LogLevel =
  | "info"
  | "warn"
  | "error";


export interface LogEntry {

  level:
    LogLevel;


  message:
    string;


  timestamp:
    string;


  context?:
    Record<string, unknown>;

}
