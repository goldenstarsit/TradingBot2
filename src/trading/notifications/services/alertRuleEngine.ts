import type {
  NotificationLevel,
} from "../types/notification";



export interface AlertRule {

  id:
    string;


  name:
    string;


  condition:
    boolean;


  level:
    NotificationLevel;

}



export interface AlertResult {

  triggered:
    boolean;


  level:
    NotificationLevel | null;

}



export class AlertRuleEngine {


  private rules:
    AlertRule[] = [];



  public addRule(
    rule: AlertRule
  ): void {


    this.rules.push(
      rule
    );

  }



  public evaluate():
    AlertResult[] {


    return this.rules.map(
      rule => ({

        triggered:
          rule.condition,

        level:
          rule.condition
            ? rule.level
            : null,

      })
    );

  }



  public getRules():
    AlertRule[] {


    return [
      ...this.rules
    ];

  }

}
