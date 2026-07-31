import { BaseRepository } from "./baseRepository";

import type {
  Order,
} from "../models";

export class OrderRepository extends BaseRepository {

  public async findAll(): Promise<Order[]> {
    return this.all<Order>(`
      SELECT
        id,
        position_id AS positionId,
        exchange_order_id AS exchangeOrderId,
        symbol,
        side,
        type,
        quantity,
        price,
        status,
        created_at AS createdAt,
        updated_at AS updatedAt
      FROM orders
      ORDER BY id DESC;
    `);
  }

  public async findById(
    id: number
  ): Promise<Order | null> {
    return this.first<Order>(
      `
      SELECT
        id,
        position_id AS positionId,
        exchange_order_id AS exchangeOrderId,
        symbol,
        side,
        type,
        quantity,
        price,
        status,
        created_at AS createdAt,
        updated_at AS updatedAt
      FROM orders
      WHERE id = ?;
      `,
      id
    );
  }

  public async findByStatus(
    status: string
  ): Promise<Order[]> {
    return this.all<Order>(
      `
      SELECT
        id,
        position_id AS positionId,
        exchange_order_id AS exchangeOrderId,
        symbol,
        side,
        type,
        quantity,
        price,
        status,
        created_at AS createdAt,
        updated_at AS updatedAt
      FROM orders
      WHERE status = ?
      ORDER BY id DESC;
      `,
      status
    );
  }

  public async insert(
    positionId: number | null,
    exchangeOrderId: string | null,
    symbol: string,
    side: string,
    type: string,
    quantity: number,
    price: number | null,
    status: string
  ): Promise<void> {
    await this.execute(
      `
      INSERT INTO orders (
        position_id,
        exchange_order_id,
        symbol,
        side,
        type,
        quantity,
        price,
        status,
        created_at,
        updated_at
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'));
      `,
      positionId,
      exchangeOrderId,
      symbol,
      side,
      type,
      quantity,
      price,
      status
    );
  }

}
