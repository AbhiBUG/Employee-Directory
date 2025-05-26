// db.js
import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'abhishek',
  password: '1234',
  port: 5432,
});

export default pool; // 👈 this MUST be default export
