const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

app.post('/message', async (req, res) => {
    const { message } = req.body;
    try {
        // Отправка POST-запроса в Service B
        await axios.post('http://localhost:3001/message-recieve', { message });
        res.status(200).send('Message sent to Service B');
    } catch (error) {
        console.error('Error sending message:', error.message);
        res.status(500).send('Error sending message');
    }
});

app.listen(3000, () => console.log('Service A running on port 3000'));