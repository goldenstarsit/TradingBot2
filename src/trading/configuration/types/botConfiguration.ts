export interface BotConfiguration {

  enabled:
    boolean;


  dryRun:
    boolean;


  symbols:
    string[];


  maxOpenPositions:
    number;


  takeProfitPercent:
    number;


  stopLossPercent:
    number;


  updateIntervalMs:
    number;

}
