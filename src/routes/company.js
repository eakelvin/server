const express = require("express");
const router = express.Router();

const { createCompany, allCompanies } = require("../controller/company");

router.post("/create", createCompany);
router.get("/all", allCompanies);

module.exports = router;
