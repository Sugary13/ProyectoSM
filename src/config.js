import {config} from 'dotenv';

config();

const PORT = process.env.PORT || 3000;
const DB_HOST = process.env.MYSQL_HOST || 'localhost';
const DB_PORT = process.env.MYSQL_PORT || '3306';
const DB_USER = process.env.MYSQL_USER || 'admin';
const DB_PASSWORD = process.env.MYSQL_PASSWORD || 'root';
const DB_DATABASE = process.env.MYSQL_DATABASE || 'database';

export {PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT};