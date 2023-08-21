import {Pool} from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'educational_platform',
    password: 'hannaeva1021',
    port: 8000
});

export default pool;