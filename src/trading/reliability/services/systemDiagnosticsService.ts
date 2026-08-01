import type {
  DiagnosticsReport,
} from "../types/diagnostics";



export class SystemDiagnosticsService {


  private readonly startedAt:
    number =
      Date.now();



  public collect():

    DiagnosticsReport {


    return {

      timestamp:
        new Date().toISOString(),


      uptime:
        Date.now() - this.startedAt,


      memoryUsage:
        process.memoryUsage().heapUsed,


      details: {

        nodeVersion:
          process.version,

      },

    };

  }

}
