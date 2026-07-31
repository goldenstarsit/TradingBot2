import { BaseRepository } from "./baseRepository";

import type {
  Position,
} from "../models";

export class PositionRepository extends BaseRepository {

  public async findAll(): Promise<Position[]> {
    return this.all<Position>(`
      SELECT
        id,
        symbol_id AS symbolId,
        strategy_id AS strategyId,
        quantity,
        entry_price AS entryPrice,
        status,
        opened_at AS openedAt,
        closed_at AS closedAt,
        created_at AS createdAt,
        updated_at AS updatedAt
      FROM positions
      ORDER BY id DESC;
    `);
  }

  public async findOpen(): Promise<Position[]> {
    return this.all<Position>(`
      SELECT
        id,
        symbol_id AS symbolId,
        strategy_id AS strategyId,
        quantity,
        entry_price AS entryPrice,
        status,
        opened_at AS openedAt,
        closed_at AS closedAt,
        created_at AS createdAt,
        updated_at AS updatedAt
      FROM positions
      WHERE status = 'OPEN'
      ORDER BY id DESC;
    `);
  }

  public async findById(
    id: number
  ): Promise<Position | null> {
    return this.first<Position>(
      `
      SELECT
        id,
        symbol_id AS symbolId,
        strategy_id AS strategyId,
        quantity,
        entry_price AS entryPrice,
        status,
        opened_at AS openedAt,
        closed_at AS closedAt,
        created_at AS createdAt,
        updated_at AS updatedAt
      FROM positions
      WHERE id = ?;
      `,
      id
    );
  }

  public async insert(
    symbolId: number,
    strategyId: number,
    quantity: number,
    entryPrice: number
  ): Promise<void> {
    await this.execute(
      `
      INSERT INTO positions (
        symbol_id,
        strategy_id,
        quantity,
        entry_price,
        status,
        opened_at,
        created_at,
        updated_at
      )
      VALUES (
        ?,
        ?,
        ?,
        ?,
        'OPEN',
        datetime('now'),
        datetime('now'),
        datetime('now')
      );
      `,
      symbolId,
      strategyId,
      quantity,
      entryPrice
    );
  }

}
