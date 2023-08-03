import pool from '../db';
import { iUser } from '../interfaces';

const getAllUserDB = async (): Promise<iUser[]> => {
    const client = await pool.connect();
    const sql = `SELECT * FROM USERS`;
    const result = (await client.query(sql)).rows;
    return result
};

const getUserByIDDB = async (id: number): Promise<iUser[]> => {
    const client = await pool.connect();
    const sql = `SELECT * FROM USERS WHERE id = $1`;
    const result = (await client.query(sql, [id])).rows;
    return result
};

const updateUserByIDDB = async (name: string, surname: string, email: string, pwd: string, id: number) => {
    const client = await pool.connect();
    const sql = `UPDATE USERS SET NAME = $1,SURNAME = $2, EMAIL = $3, PWD = $4 WHERE id = $5 RETURNING *`
    const result = (await client.query(sql, [name, surname, email, pwd, id])).rows;
    return result; 
}

const deleteUserByIDDB = async (id: number) => {
    const client = await pool.connect();
    const sql = `DELETE FROM USERS WHERE id = $1 RETURNING *`
    const result = (await client.query(sql, [id])).rows;
    return result; 
}

export { getAllUserDB, getUserByIDDB, updateUserByIDDB, deleteUserByIDDB }