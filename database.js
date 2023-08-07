import pg from "pg";
import dotenv from 'dotenv';

dotenv.config();
const credentials = {
    host:process.env.DB_HOST,
    user:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE,
    port:5432
}

const pool = new pg.Pool(credentials);
pool.connect();
export async function getuser(){
    const [rows] = await pool.query('SELECT * FROM users').then((result)=>{
        return result;
    }).catch((err)=>{
        console.log(err);
        return;
    });
    console.log(rows,'called');
    return ;
}