import { BaseRepository } from "./baseRepository";

export interface IndicatorConfig {

  readonly id: number;

  readonly indicatorId: number;

  readonly configKey: string;

  readonly configValue: string;

  readonly createdAt: string;

  readonly updatedAt: string;

}

export class IndicatorConfigRepository extends BaseRepository {

  public async findByIndicatorId(
    indicatorId: number
  ): Promise<IndicatorConfig[]> {
    return this.all<IndicatorConfig>(
      `
      SELECT
        id,
        indicator_id AS indicatorId,
        config_key AS configKey,
        config_value AS configValue,
        created_at AS createdAt,
        updated_at AS updatedAt
      FROM indicator_configs
      WHERE indicator_id = ?
      ORDER BY config_key ASC;
      `,
      indicatorId
    );
  }

  public async findValue(
    indicatorId: number,
    configKey: string
  ): Promise<IndicatorConfig | null> {
    return this.first<IndicatorConfig>(
      `
      SELECT
        id,
        indicator_id AS indicatorId,
        config_key AS configKey,
        config_value AS configValue,
        created_at AS createdAt,
        updated_at AS updatedAt
      FROM indicator_configs
      WHERE indicator_id = ?
      AND config_key = ?;
      `,
      indicatorId,
      configKey
    );
  }

  public async upsert(
    indicatorId: number,
    configKey: string,
    configValue: string
  ): Promise<void> {
    await this.execute(
      `
      INSERT INTO indicator_configs (
        indicator_id,
        config_key,
        config_value,
        created_at,
        updated_at
      )
      VALUES (?, ?, ?, datetime('now'), datetime('now'))
      ON CONFLICT(indicator_id, config_key)
      DO UPDATE SET
        config_value = excluded.config_value,
        updated_at = datetime('now');
      `,
      indicatorId,
      configKey,
      configValue
    );
  }

}
