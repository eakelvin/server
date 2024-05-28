const express = require('express');
const cors = require('cors')
const PORT = process.env.PORT | 4000;
const server = express();

server.use('/', (req, res) => {
    res.send('Live Server')
});

server.listen(PORT, () => console.log(`Server live on Port ${PORT}`));
