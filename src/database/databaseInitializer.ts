import { getDatabase } from "./connection";
import { runMigrations } from "./migrations/migrationRunner";
import { runDefaultSeed } from "./seed";

export async function initializeDatabase(): Promise<void> {

  await getDatabase();

  await runMigrations();

  await runDefaultSeed();

}
