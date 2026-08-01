export interface ValidationResult {

  check:
    string;


  passed:
    boolean;

}


export interface SystemValidationReport {

  timestamp:
    string;


  results:
    ValidationResult[];

}
