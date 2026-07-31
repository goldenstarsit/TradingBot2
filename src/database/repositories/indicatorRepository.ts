import { BaseRepository } from "./baseRepository";

import type {
  Indicator,
} from "../models";

export class IndicatorRepository extends BaseRepository {

  public async findAll(): Promise<Indicator[]> {
    return this.all<Indicator>(`
      SELECT
        id,
        name,
        enabled,
        created_at AS createdAt,
        updated_at AS updatedAt
      FROM indicators
      ORDER BY name ASC;
    `);
  }

  public async findById(
    id: number
  ): Promise<Indicator | null> {
    return this.first<Indicator>(
      `
      SELECT
        id,
        name,
        enabled,
        created_at AS createdAt,
        updated_at AS updatedAt
      FROM indicators
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
      INSERT INTO indicators (
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
