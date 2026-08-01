export interface DiagnosticsReport {

  timestamp:
    string;


  uptime:
    number;


  memoryUsage:
    number;


  details:
    Record<string, unknown>;

}
