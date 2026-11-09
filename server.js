require('dotenv').config();
const express = require('express');
const pool = require('./database');
const app = express();
const port = process.env.PORT || 3000;

const userRoutes = require('./routes/userRoutes');

app.get('/', (req, res)=> {
    res.send('Fitness Nutrition Tracking App');
});

app.use('/api/users', userRoutes);

app.use(express.json());

//app.listen(port, () => {
  //  console.log('Server is running on http://localhost:${port}')
//)

async function start() {
    try {
        await pool.query('SELECT 1');
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    }
    catch (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1);
    }
}