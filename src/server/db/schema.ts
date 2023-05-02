import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";

import { migrate } from "drizzle-orm/better-sqlite3/migrator";

export const books = sqliteTable("book", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  author: text("author").notNull(),
  sinopsis: text("sinopsis"),
  pages: integer("pages"),
  isBorrowed: integer("is_borrowed").$type<0 | 1>().default(0),
});

export const users = sqliteTable("user", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
});

export const borrows = sqliteTable("borrows", {
  id: integer("id").primaryKey(),
  bookId: text("book_id").notNull(),
  userId: text("user_id").notNull(),
  borrowDate: integer("borrow_date", { mode: "timestamp" }),
  returnDate: integer("return_date", { mode: "timestamp" }),
  accumulatedFine: integer("accumulated_fine").default(0),
});

const sqlite = new Database("./database.sqlite3");
export const db = drizzle(sqlite);

migrate(db, { migrationsFolder: "./migrations" }); // Run migrations
