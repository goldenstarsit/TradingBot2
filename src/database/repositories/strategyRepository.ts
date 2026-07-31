import { BaseRepository } from "./baseRepository";

import type {
  Strategy,
} from "../models";

export class StrategyRepository extends BaseRepository {

  public async findAll(): Promise<Strategy[]> {
    return this.all<Strategy>(`
      SELECT
        id,
        name,
        enabled,
        created_at AS createdAt,
        updated_at AS updatedAt
      FROM strategies
      ORDER BY name ASC;
    `);
  }

  public async findById(
    id: number
  ): Promise<Strategy | null> {
    return this.first<Strategy>(
      `
      SELECT
        id,
        name,
        enabled,
        created_at AS createdAt,
        updated_at AS updatedAt
      FROM strategies
      WHERE id = ?;
      `,
      id
    );
  }

  public async insert(
    name: string,
    enabled: boolean
  ): Promise<void> {
    await this.execute(
      `
      INSERT INTO strategies (
        name,
        enabled,
        created_at,
        updated_at
      )
      VALUES (?, ?, datetime('now'), datetime('now'));
      `,
      name,
      enabled ? 1 : 0
    );
  }

}
