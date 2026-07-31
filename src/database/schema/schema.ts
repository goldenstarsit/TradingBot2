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
];
