import { BaseRepository } from "./baseRepository";

import type {
  Symbol,
} from "../models";

export class SymbolRepository extends BaseRepository {

  public async findAll(): Promise<Symbol[]> {
    return this.all<Symbol>(`
      SELECT
        id,
        symbol,
        base_asset AS baseAsset,
        quote_asset AS quoteAsset,
        active,
        created_at AS createdAt,
        updated_at AS updatedAt
      FROM symbols
      ORDER BY symbol ASC;
    `);
  }

  public async findActive(): Promise<Symbol[]> {
    return this.all<Symbol>(`
      SELECT
        id,
        symbol,
        base_asset AS baseAsset,
        quote_asset AS quoteAsset,
        active,
        created_at AS createdAt,
        updated_at AS updatedAt
      FROM symbols
      WHERE active = 1
      ORDER BY symbol ASC;
    `);
  }

  public async findBySymbol(
    symbol: string
  ): Promise<Symbol | null> {
    return this.first<Symbol>(
      `
      SELECT
        id,
        symbol,
        base_asset AS baseAsset,
        quote_asset AS quoteAsset,
        active,
        created_at AS createdAt,
        updated_at AS updatedAt
      FROM symbols
      WHERE symbol = ?;
      `,
      symbol
    );
  }

  public async insert(
    symbol: string,
    baseAsset: string,
    quoteAsset: string
  ): Promise<void> {
    await this.execute(
      `
      INSERT INTO symbols (
        symbol,
        base_asset,
        quote_asset,
        active,
        created_at,
        updated_at
      )
      VALUES (?, ?, ?, 1, datetime('now'), datetime('now'));
      `,
      symbol,
      baseAsset,
      quoteAsset
    );
  }

}
