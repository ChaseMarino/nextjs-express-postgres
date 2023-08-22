const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./database');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = 3999;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
//fetch all rows
app.get('/data', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM memo');
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

//insert new row via post 
app.post('/data', async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Invalid input' }); //this is where we would add further sanitization, or use an orm to do that automatically 
        }

        await pool.query('INSERT INTO memo (message) VALUES ($1)', [message]);
        res.status(201).json({ message: 'Data inserted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
