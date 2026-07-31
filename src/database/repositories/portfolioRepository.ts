import { BaseRepository } from "./baseRepository";

import type {
  Portfolio,
} from "../models";

export class PortfolioRepository extends BaseRepository {

  public async findAll(): Promise<Portfolio[]> {
    return this.all<Portfolio>(`
      SELECT
        asset,
        free,
        locked,
        updated_at AS updatedAt
      FROM portfolio
      ORDER BY asset ASC;
    `);
  }

  public async findByAsset(
    asset: string
  ): Promise<Portfolio | null> {
    return this.first<Portfolio>(
      `
      SELECT
        asset,
        free,
        locked,
        updated_at AS updatedAt
      FROM portfolio
      WHERE asset = ?;
      `,
      asset
    );
  }

  public async upsert(
    asset: string,
    free: number,
    locked: number
  ): Promise<void> {
    await this.execute(
      `
      INSERT INTO portfolio (
        asset,
        free,
        locked,
        updated_at
      )
      VALUES (?, ?, ?, datetime('now'))
      ON CONFLICT(asset)
      DO UPDATE SET
        free = excluded.free,
        locked = excluded.locked,
        updated_at = datetime('now');
      `,
      asset,
      free,
      locked
    );
  }

}
