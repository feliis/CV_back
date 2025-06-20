const express = require('express');
const cors = require('cors');
const { getPersonInfo } = require('./database');

const app = express();
const port = 3000;

app.use(cors());

app.get('/main', async (req, res) => {
    try {
        const personInfo = await getPersonInfo();
        res.status(200).json(personInfo);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, '127.0.0.1', () => {
    console.log(`Server running at http://127.0.0.1:${port}/`);
});