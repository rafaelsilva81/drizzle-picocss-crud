import { InferModel } from "drizzle-orm";
import { books } from "../db/schema";

export type Book = InferModel<typeof books>;
