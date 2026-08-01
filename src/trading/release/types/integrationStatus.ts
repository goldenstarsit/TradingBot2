export interface IntegrationStatus {

  module:
    string;


  ready:
    boolean;

}


export interface IntegrationReport {

  timestamp:
    string;


  modules:
    IntegrationStatus[];

}
