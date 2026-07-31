import { BaseRepository } from "./baseRepository";

export interface StrategyConfig {

  readonly id: number;

  readonly strategyId: number;

  readonly configKey: string;

  readonly configValue: string;

  readonly createdAt: string;

  readonly updatedAt: string;

}

export class StrategyConfigRepository extends BaseRepository {

  public async findByStrategyId(
    strategyId: number
  ): Promise<StrategyConfig[]> {
    return this.all<StrategyConfig>(
      `
      SELECT
        id,
        strategy_id AS strategyId,
        config_key AS configKey,
        config_value AS configValue,
        created_at AS createdAt,
        updated_at AS updatedAt
      FROM strategy_configs
      WHERE strategy_id = ?
      ORDER BY config_key ASC;
      `,
      strategyId
    );
  }

  public async findValue(
    strategyId: number,
    configKey: string
  ): Promise<StrategyConfig | null> {
    return this.first<StrategyConfig>(
      `
      SELECT
        id,
        strategy_id AS strategyId,
        config_key AS configKey,
        config_value AS configValue,
        created_at AS createdAt,
        updated_at AS updatedAt
      FROM strategy_configs
      WHERE strategy_id = ?
      AND config_key = ?;
      `,
      strategyId,
      configKey
    );
  }

  public async upsert(
    strategyId: number,
    configKey: string,
    configValue: string
  ): Promise<void> {
    await this.execute(
      `
      INSERT INTO strategy_configs (
        strategy_id,
        config_key,
        config_value,
        created_at,
        updated_at
      )
      VALUES (?, ?, ?, datetime('now'), datetime('now'))
      ON CONFLICT(strategy_id, config_key)
      DO UPDATE SET
        config_value = excluded.config_value,
        updated_at = datetime('now');
      `,
      strategyId,
      configKey,
      configValue
    );
  }

}
