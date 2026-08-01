import type {
  SystemValidationReport,
  ValidationResult,
} from "../types/systemValidation";



export class SystemValidationService {


  private readonly checks:
    ValidationResult[] = [];



  public addCheck(

    check:
      string,

    passed:
      boolean

  ): void {


    this.checks.push({

      check,

      passed,

    });

  }



  public validate():

    SystemValidationReport {


    return {

      timestamp:
        new Date().toISOString(),

      results: [

        ...this.checks,

      ],

    };

  }

}
