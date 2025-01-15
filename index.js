require("dotenv/config");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const PORT = process.env.PORT | 4000;
const server = express();
const api = process.env.API_URL;

const connectDatabase = require("./src/config/database");
const { notFound, errorHandler } = require("./src/middleware/error");

const user = require("./src/routes/user");
const message = require("./src/routes/messageRoute");
const consultation = require("./src/routes/consultation");
const product = require("./src/routes/product");
const file = require("./src/routes/file");
const subscribe = require("./src/routes/subscribe");
const company = require("./src/routes/company");

connectDatabase();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());

server.use(`${api}/users`, user);
server.use(`${api}/messages`, message);
server.use(`${api}/subscribe`, subscribe);
server.use(`${api}/consultations`, consultation);
server.use(`${api}/products`, product);
server.use(`${api}/files`, file);
server.use(`${api}/files`, express.static("files"));
server.use(`${api}/company`, company);

server.get("/", (req, res) => {
  res.send("Live Test Server");
});

server.use(notFound);
server.use(errorHandler);

server.listen(PORT, () => console.log(`Server live on Port ${PORT}`));
