export interface DatabaseTable {
  readonly name: string;
  readonly sql: string;
}

export const DATABASE_TABLES: readonly DatabaseTable[] = [
  {
    name: "database_version",
    sql: `
      CREATE TABLE IF NOT EXISTS database_version (
        version INTEGER NOT NULL
      );
    `,
  },
];
