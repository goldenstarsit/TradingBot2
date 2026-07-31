import { SQLiteDatabase } from "expo-sqlite";

import { getDatabase } from "../connection";

export abstract class BaseRepository {

  protected async database(): Promise<SQLiteDatabase> {
    return getDatabase();
  }

  protected async execute(
    sql: string,
    ...params: (string | number | null)[]
  ): Promise<void> {
    const database = await this.database();

    await database.runAsync(sql, params);
  }

  protected async first<T>(
    sql: string,
    ...params: (string | number | null)[]
  ): Promise<T | null> {
    const database = await this.database();

    const row = await database.getFirstAsync<T>(
      sql,
      params
    );

    return row ?? null;
  }

  protected async all<T>(
    sql: string,
    ...params: (string | number | null)[]
  ): Promise<T[]> {
    const database = await this.database();

    return database.getAllAsync<T>(
      sql,
      params
    );
  }

}
