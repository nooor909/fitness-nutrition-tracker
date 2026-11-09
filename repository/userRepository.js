const pool = require('../database');


async function getUserItems() {
    const result = await pool.query('SELECT * FROM users');
    return result.rows;
}

async function getUserById(id) {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0];
}
