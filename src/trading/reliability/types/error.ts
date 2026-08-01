export type ErrorSeverity =
  | "low"
  | "medium"
  | "high"
  | "critical";


export interface ErrorRecord {

  message:
    string;


  severity:
    ErrorSeverity;


  timestamp:
    string;


  context?:
    Record<string, unknown>;

}
