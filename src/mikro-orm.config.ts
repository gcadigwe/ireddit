import { Post } from "./entities/Post";
import { __prod__ } from "./utils/constants";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post],
  dbName: "postgres",
  debug: !__prod__,
  user: "postgres",
  password: "salzkid24",
  type: "postgresql",
} as Parameters<typeof MikroORM.init>[0];
