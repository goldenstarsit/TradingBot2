export interface DatabaseConfig {
  readonly name: string;
  readonly enableWal: boolean;
  readonly enableForeignKeys: boolean;
}

export interface DatabaseState {
  readonly initialized: boolean;
  readonly version: number;
}

export const DATABASE_CONFIG: DatabaseConfig = {
  name: "tradingbot.db",
  enableWal: true,
  enableForeignKeys: true,
};

export const DATABASE_VERSION = 1;
