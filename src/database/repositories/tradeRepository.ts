import { BaseRepository } from "./baseRepository";

import type {
  Trade,
} from "../models";

export class TradeRepository extends BaseRepository {

  public async findAll(): Promise<Trade[]> {
    return this.all<Trade>(`
      SELECT
        id,
        order_id AS orderId,
        symbol,
        side,
        quantity,
        price,
        fee,
        profit_loss AS profitLoss,
        executed_at AS executedAt
      FROM trades
      ORDER BY id DESC;
    `);
  }

  public async findById(
    id: number
  ): Promise<Trade | null> {
    return this.first<Trade>(
      `
      SELECT
        id,
        order_id AS orderId,
        symbol,
        side,
        quantity,
        price,
        fee,
        profit_loss AS profitLoss,
        executed_at AS executedAt
      FROM trades
      WHERE id = ?;
      `,
      id
    );
  }

  public async findBySymbol(
    symbol: string
  ): Promise<Trade[]> {
    return this.all<Trade>(
      `
      SELECT
        id,
        order_id AS orderId,
        symbol,
        side,
        quantity,
        price,
        fee,
        profit_loss AS profitLoss,
        executed_at AS executedAt
      FROM trades
      WHERE symbol = ?
      ORDER BY id DESC;
      `,
      symbol
    );
  }

  public async insert(
    orderId: number,
    symbol: string,
    side: string,
    quantity: number,
    price: number,
    fee: number,
    profitLoss: number | null
  ): Promise<void> {
    await this.execute(
      `
      INSERT INTO trades (
        order_id,
        symbol,
        side,
        quantity,
        price,
        fee,
        profit_loss,
        executed_at
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, datetime('now'));
      `,
      orderId,
      symbol,
      side,
      quantity,
      price,
      fee,
      profitLoss
    );
  }

}
