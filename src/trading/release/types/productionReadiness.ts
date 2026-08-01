export interface ReadinessCheck {

  name:
    string;


  passed:
    boolean;

}


export interface ProductionReadinessReport {

  timestamp:
    string;


  checks:
    ReadinessCheck[];


  ready:
    boolean;

}
