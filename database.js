import { Client, Pool } from "pg";
import dotenv from 'dotenv';

dotenv.config();
const credentials = {
    host:process.env.DB_HOST,
    user:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE,
    port:5432
}

const pool = new Pool(credentials);
pool.query()
const client = new Client(credentials);

client.connect();