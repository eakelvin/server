const express = require("express");
const router = express.Router();

const { getRssFeed } = require("../controller/rss");

router.get("/all", getRssFeed);

module.exports = router;
