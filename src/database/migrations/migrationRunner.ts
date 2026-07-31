import { getDatabase } from "../connection";
import { DATABASE_TABLES } from "../schema/schema";

export async function runMigrations(): Promise<void> {
  const database = await getDatabase();

  for (const table of DATABASE_TABLES) {
    await database.execAsync(table.sql);
  }

  const result = await database.getFirstAsync<{ version: number }>(
    "SELECT version FROM database_version LIMIT 1;"
  );

  if (!result) {
    await database.runAsync(
      "INSERT INTO database_version (version) VALUES (?);",
      1
    );
  }
}
