export class DatabaseError extends Error {

  public readonly cause?: unknown;

  public constructor(
    message: string,
    cause?: unknown
  ) {
    super(message);

    this.name = "DatabaseError";
    this.cause = cause;

    Object.setPrototypeOf(
      this,
      new.target.prototype
    );
  }

}

export class DatabaseConnectionError extends DatabaseError {

  public constructor(cause?: unknown) {
    super(
      "Failed to connect to database.",
      cause
    );

    this.name = "DatabaseConnectionError";
  }

}

export class DatabaseMigrationError extends DatabaseError {

  public constructor(cause?: unknown) {
    super(
      "Database migration failed.",
      cause
    );

    this.name = "DatabaseMigrationError";
  }

}

export class DatabaseQueryError extends DatabaseError {

  public constructor(
    message = "Database query failed.",
    cause?: unknown
  ) {
    super(
      message,
      cause
    );

    this.name = "DatabaseQueryError";
  }

}
