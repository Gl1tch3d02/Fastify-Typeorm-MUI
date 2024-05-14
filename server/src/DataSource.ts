import { DataSource } from "typeorm"
import path from "path"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB_NAME,
    synchronize: true,
    logging: false,
    entities: [path.resolve(__dirname, "./entities/**/*.{ts,js}")],
    migrations: [],
    subscribers: []
})

export default AppDataSource
