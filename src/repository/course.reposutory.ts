import pool from '../db';
import { iCourse } from '../interfaces';

const getAllCourseDB = async (): Promise <iCourse> => {
    const client = await pool.connect();
    const sql = `SELECT * FROM COURSES`;
    const result = (await client.query(sql)).rows;
    return result
};

const getCourseByIDDB = async (id: number): Promise <iCourse> => {
    const client = await pool.connect();
    const sql = `SELECT * FROM COURSES WHERE id = $1`;
    const result = (await client.query(sql, [id])).rows;
    return result
};

const createCourseDB = async (course: string): Promise <iCourse> => {
    const client = await pool.connect();
    const sql = `INSERT INTO COURSES (COURSE) VALUES ($1) RETURNING * `;
    const result = (await client.query(sql, [course])).rows;
    return result
}

const updateCourseByIDDB = async ( course: string, id: number) => {
    const client = await pool.connect();
    const sql = `UPDATE COURSES SET COURSE = $1 WHERE id = $2 RETURNING *`
    const result = (await client.query(sql, [course, id])).rows;
    return result; 
}

const deleteCourseByIDDB = async (id: number) => {
    const client = await pool.connect();
    const sql = `DELETE FROM COURSES WHERE id = $1 RETURNING *`
    const result = (await client.query(sql, [id])).rows;
    return result; 
}

export { getAllCourseDB, getCourseByIDDB, createCourseDB, updateCourseByIDDB, deleteCourseByIDDB }