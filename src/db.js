import { createPool } from "mysql2/promise";
import { DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_DATABASE} from "./config.js";
import dotenv from "dotenv";

dotenv.config(); // Cargar el archivo .env

// Crear el pool de conexión a la base de datos usando las variables de entorno
export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE,
});

