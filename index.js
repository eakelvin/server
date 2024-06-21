const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const PORT = process.env.PORT | 4000;
const server = express();

const connectDatabase = require('./src/config/database');
const { notFound, errorHandler } = require('./src/middleware/error');
const userRoute = require('./src/routes/user');
const messageRoute = require('./src/routes/messageRoute');
const consultation = require('./src/routes/consultation');

connectDatabase();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());

server.use('/api/users', userRoute);
server.use('/api/messages', messageRoute);
server.use('/api/consultation', consultation);

server.use('/', (req, res) => {
    res.send('Live Server')
});

server.use(notFound);
server.use(errorHandler);

server.listen(PORT, () => console.log(`Server live on Port ${PORT}`));
