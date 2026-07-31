import { BaseRepository } from "./baseRepository";

export interface TradeLog {

  readonly id: number;

  readonly tradeId: number;

  readonly message: string;

  readonly createdAt: string;

}

export class TradeLogRepository extends BaseRepository {

  public async findAll(): Promise<TradeLog[]> {
    return this.all<TradeLog>(`
      SELECT
        id,
        trade_id AS tradeId,
        message,
        created_at AS createdAt
      FROM trade_logs
      ORDER BY id DESC;
    `);
  }

  public async findByTradeId(
    tradeId: number
  ): Promise<TradeLog[]> {
    return this.all<TradeLog>(
      `
      SELECT
        id,
        trade_id AS tradeId,
        message,
        created_at AS createdAt
      FROM trade_logs
      WHERE trade_id = ?
      ORDER BY id DESC;
      `,
      tradeId
    );
  }

  public async insert(
    tradeId: number,
    message: string
  ): Promise<void> {
    await this.execute(
      `
      INSERT INTO trade_logs (
        trade_id,
        message,
        created_at
      )
      VALUES (?, ?, datetime('now'));
      `,
      tradeId,
      message
    );
  }

}
