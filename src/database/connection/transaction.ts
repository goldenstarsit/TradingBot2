import { SQLiteDatabase } from "expo-sqlite";

import { getDatabase } from "./database";

export async function transaction<T>(
  callback: (
    database: SQLiteDatabase
  ) => Promise<T>
): Promise<T> {

  const database = await getDatabase();

  await database.execAsync("BEGIN TRANSACTION;");

  try {

    const result = await callback(
      database
    );

    await database.execAsync(
      "COMMIT;"
    );

    return result;

  } catch (error) {

    await database.execAsync(
      "ROLLBACK;"
    );

    throw error;

  }

}
