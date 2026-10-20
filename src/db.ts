import "dotenv/config";
import { Pool } from "pg";

const pool = new Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

export const connectDatabase = async() => {
    try{

        await pool.query("SELECT NOW()");
        console.log("Database connected")
  
    }catch(err){
        throw err;
    }

};

export default pool;

