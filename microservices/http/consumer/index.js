const express = require('express');

const app = express();
app.use(express.json());

app.post('/message', (req, res) => {
    const { message } = req.body;
    console.log('Received message:', message);
    res.status(200).send('Message received');
});

app.listen(3001, () => console.log('Service B running on port 3001'));