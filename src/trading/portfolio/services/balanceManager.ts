export class BalanceManager {


  constructor(
    private balance = 0
  ) {}


  public getBalance():
    number {

    return this.balance;

  }


  public deposit(
    amount: number
  ): void {

    this.balance +=
      amount;

  }


  public withdraw(
    amount: number
  ): boolean {

    if (
      amount >
      this.balance
    ) {

      return false;

    }


    this.balance -=
      amount;


    return true;

  }

}
