import { InferModel } from "drizzle-orm";
import { users } from "../db/schema";

export type User = InferModel<typeof users>;
