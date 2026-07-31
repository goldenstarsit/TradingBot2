export type DatabaseValue =
  | string
  | number
  | bigint
  | boolean
  | null;

export type DatabaseParameters = readonly DatabaseValue[];

export interface PaginationOptions {

  readonly limit: number;

  readonly offset: number;

}

export interface SortOptions {

  readonly field: string;

  readonly direction: "ASC" | "DESC";

}
