import { InferModel } from "drizzle-orm";
import { borrows } from "../db/schema";

export type Borrows = InferModel<typeof borrows>;
