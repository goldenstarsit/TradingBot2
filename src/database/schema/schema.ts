import type {
  DatabaseTable,
} from "./types";

export const DATABASE_TABLES: readonly DatabaseTable[] = [
  {
    name: "database_version",
    sql: `
      CREATE TABLE IF NOT EXISTS database_version (
        version INTEGER NOT NULL
      );
    `,
  },
  {
    name: "app_config",
    sql: `
      CREATE TABLE IF NOT EXISTS app_config (
        key TEXT PRIMARY KEY NOT NULL,
        value TEXT NOT NULL,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL
      );
    `,
  },
  {
    name: "strategies",
    sql: `
      CREATE TABLE IF NOT EXISTS strategies (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE,
        enabled INTEGER NOT NULL DEFAULT 0,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL
      );
    `,
  },
  {
    name: "strategy_configs",
    sql: `
      CREATE TABLE IF NOT EXISTS strategy_configs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        strategy_id INTEGER NOT NULL,
        config_key TEXT NOT NULL,
        config_value TEXT NOT NULL,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        FOREIGN KEY (strategy_id)
          REFERENCES strategies(id)
          ON DELETE CASCADE
      );
    `,
  },
  {
    name: "indicators",
    sql: `
      CREATE TABLE IF NOT EXISTS indicators (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE,
        enabled INTEGER NOT NULL DEFAULT 0,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL
      );
    `,
  },
  {
    name: "indicator_configs",
    sql: `
      CREATE TABLE IF NOT EXISTS indicator_configs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        indicator_id INTEGER NOT NULL,
        config_key TEXT NOT NULL,
        config_value TEXT NOT NULL,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        FOREIGN KEY (indicator_id)
          REFERENCES indicators(id)
          ON DELETE CASCADE
      );
    `,
  },
  {
    name: "symbols",
    sql: `
      CREATE TABLE IF NOT EXISTS symbols (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        symbol TEXT NOT NULL UNIQUE,
        base_asset TEXT NOT NULL,
        quote_asset TEXT NOT NULL,
        active INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL
      );
    `,
  },
  {
    name: "portfolio",
    sql: `
      CREATE TABLE IF NOT EXISTS portfolio (
        asset TEXT PRIMARY KEY NOT NULL,
        free REAL NOT NULL,
        locked REAL NOT NULL,
        updated_at TEXT NOT NULL
      );
    `,
  },
  {
    name: "positions",
    sql: `
      CREATE TABLE IF NOT EXISTS positions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        symbol_id INTEGER NOT NULL,
        strategy_id INTEGER NOT NULL,
        quantity REAL NOT NULL,
        entry_price REAL NOT NULL,
        status TEXT NOT NULL,
        opened_at TEXT NOT NULL,
        closed_at TEXT,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        FOREIGN KEY (symbol_id)
          REFERENCES symbols(id),
        FOREIGN KEY (strategy_id)
          REFERENCES strategies(id)
      );
    `,
  },
  {
    name: "orders",
    sql: `
      CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        position_id INTEGER,
        exchange_order_id TEXT,
        symbol TEXT NOT NULL,
        side TEXT NOT NULL,
        type TEXT NOT NULL,
        quantity REAL NOT NULL,
        price REAL,
        status TEXT NOT NULL,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        FOREIGN KEY (position_id)
          REFERENCES positions(id)
      );
    `,
  },
  {
    name: "trades",
    sql: `
      CREATE TABLE IF NOT EXISTS trades (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        order_id INTEGER NOT NULL,
        symbol TEXT NOT NULL,
        side TEXT NOT NULL,
        quantity REAL NOT NULL,
        price REAL NOT NULL,
        fee REAL NOT NULL,
        profit_loss REAL,
        executed_at TEXT NOT NULL,
        FOREIGN KEY (order_id)
          REFERENCES orders(id)
      );
    `,
  },
  {
    name: "trade_logs",
    sql: `
      CREATE TABLE IF NOT EXISTS trade_logs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        trade_id INTEGER NOT NULL,
        message TEXT NOT NULL,
        created_at TEXT NOT NULL,
        FOREIGN KEY (trade_id)
          REFERENCES trades(id)
          ON DELETE CASCADE
      );
    `,
  },
];
