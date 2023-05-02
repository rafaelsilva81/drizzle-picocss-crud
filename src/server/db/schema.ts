import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";

import { v4 as uuidv4 } from "uuid";

export const books = sqliteTable("book", {
  id: text("id").primaryKey().default(uuidv4()),
  title: text("title").notNull(),
  author: text("author").notNull(),
  sinopsis: text("sinopsis"),
  pages: integer("pages"),
  isBorrowed: integer("is_borrowed").$type<0 | 1>().default(0),
});

export const users = sqliteTable("user", {
  id: text("id").primaryKey().default(uuidv4()),
  name: text("name").notNull(),
});

export const borrows = sqliteTable("borrows", {
  id: text("id").primaryKey().default(uuidv4()),
  bookId: text("book_id").notNull(),
  userId: text("user_id").notNull(),
  borrowDate: integer("borrow_date", { mode: "timestamp" }).default(new Date()),
  returnDate: integer("return_date", { mode: "timestamp" }),
  accumulatedFine: integer("accumulated_fine").default(0),
});

const sqlite = new Database("./database.sqlite3");
const db = drizzle(sqlite);
