import pool from '../db';
import { iUser } from '../interfaces';


const registrationDB = async (name: string, surname: string, email: string, pwd: string): Promise<iUser[]> => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = `INSERT INTO USERS(NAME, SURNAME, EMAIL, PWD) VALUES ($1, $2, $3, $4) RETURNING * `;
        const result = (await client.query(sql, [name, surname, email, pwd])).rows;

        await client.query('COMMIT');
        return result
    } catch (err: any) {
        await client.query("ROLLBACK");
        return [];
    }
}


const getByEmail = async (email: string): Promise<iUser[]> => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = `SELECT * FROM USERS WHERE email = $1`;
        const result = (await client.query(sql, [email])).rows;
        await client.query('COMMIT');
        return result
    }
    catch (err) {
        await client.query("ROLLBACK");
        return [];
    }
}

export { registrationDB, getByEmail }