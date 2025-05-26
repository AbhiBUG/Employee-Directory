import express from 'express';
import pool from './db.js';

const app = express();
const PORT = 8000;

app.use(express.json());

// Get all employees
app.get('/employees', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM employee');
    res.json(result.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
