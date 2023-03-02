import "dotenv/config";
import path from "path";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";

const DataSoucerConfig = (): DataSourceOptions => {
  const entities: string = path.join(__dirname, "./entities/**.{ts,js}");
  const migrations: string = path.join(__dirname, "./migrations/**.{ts,js}");

  const dbUrl: string | undefined = process.env.DATABASE_URL!;
  const nodEnv: string | undefined = process.env.NODE_ENV;

  if (!dbUrl) {
    throw new Error("Env var DATABASE_URL does not exist");
  }

  if (nodEnv === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [entities],
    };
  }

  return {
    type: "postgres",
    url: dbUrl,
    synchronize: false,
    logging: true,
    migrations: [migrations],
    entities: [entities],
  };
};
const AppDataSource = new DataSource(DataSoucerConfig());

export { AppDataSource };
//process.env.DATABASE_URL!
