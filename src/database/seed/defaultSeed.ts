import { getDatabase } from "../connection";

export async function runDefaultSeed(): Promise<void> {

  const database = await getDatabase();

  await database.execAsync(`
    INSERT OR IGNORE INTO strategies (
      name,
      enabled,
      created_at,
      updated_at
    )
    VALUES (
      'Rotation Strategy',
      1,
      datetime('now'),
      datetime('now')
    );

    INSERT OR IGNORE INTO indicators (
      name,
      enabled,
      created_at,
      updated_at
    )
    VALUES
      (
        'RSI',
        1,
        datetime('now'),
        datetime('now')
      ),
      (
        'EMA',
        1,
        datetime('now'),
        datetime('now')
      ),
      (
        'MACD',
        1,
        datetime('now'),
        datetime('now')
      );

    INSERT OR IGNORE INTO symbols (
      symbol,
      base_asset,
      quote_asset,
      active,
      created_at,
      updated_at
    )
    VALUES
      (
        'BTCUSDT',
        'BTC',
        'USDT',
        1,
        datetime('now'),
        datetime('now')
      ),
      (
        'ETHUSDT',
        'ETH',
        'USDT',
        1,
        datetime('now'),
        datetime('now')
      ),
      (
        'BNBUSDT',
        'BNB',
        'USDT',
        1,
        datetime('now'),
        datetime('now')
      );
  `);

}
