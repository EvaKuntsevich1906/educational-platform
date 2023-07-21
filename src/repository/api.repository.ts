import pool from '../db';
import { iUser } from '../interfaces';

const registrationDB = async (name: string, surname: string, email: string, pwd: string): Promise<iUser> => {
    const client = await pool.connect();
    const sql = `INSERT INTO USERS(NAME, SURNAME, EMAIL, PWD) VALUES ($1, $2, $3, $4) RETURNING * `;
    const result = (await client.query(sql, [name, surname, email, pwd])).rows;
    return result
}

export {registrationDB}