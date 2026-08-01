import type {
  Position,
} from "../types/portfolio";


export class PositionManager {


  private readonly positions:
    Position[] =
      [];


  public getAll():
    readonly Position[] {

    return this.positions;

  }


  public get(
    symbol: string
  ): Position | undefined {

    return this.positions.find(
      position =>
        position.symbol ===
        symbol
    );

  }


  public upsert(
    position: Position
  ): void {

    const index =
      this.positions.findIndex(
        current =>
          current.symbol ===
          position.symbol
      );


    if (
      index === -1
    ) {

      this.positions.push(
        position
      );

      return;

    }


    this.positions[index] =
      position;

  }


  public remove(
    symbol: string
  ): boolean {

    const index =
      this.positions.findIndex(
        position =>
          position.symbol ===
          symbol
      );


    if (
      index === -1
    ) {

      return false;

    }


    this.positions.splice(
      index,
      1
    );


    return true;

  }

}
