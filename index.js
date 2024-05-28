const express = require('express');
const cors = require('cors')
const PORT = process.env.PORT | 4000;
const server = express();

const connectDatabase = require('./src/config/database');
const messageRouter = require('./src/routes/messageRoute');
const consultation = require('./src/routes/consultation');

connectDatabase();

server.use(cors());
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.use('/api/messages', messageRouter);
server.use('/api/consultation', consultation)

server.use('/', (req, res) => {
    res.send('Live Server')
});

server.listen(PORT, () => console.log(`Server live on Port ${PORT}`));
