export type HealthStatus =
  | "healthy"
  | "degraded"
  | "unhealthy";


export interface HealthReport {

  status:
    HealthStatus;


  timestamp:
    string;


  services:
    Record<string, boolean>;

}
