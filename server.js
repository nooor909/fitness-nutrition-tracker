const express = require('express');
const app = express();
const port = 3000;

const userRoutes = require('./routes/userRoutes');

app.get('/', (req, res)=> {
    res.send('Fitness Nutrition Tracking App');
});

app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log('Server is running on http://localhost:${port}')
});