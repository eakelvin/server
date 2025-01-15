const express = require("express");
const router = express.Router();

const {
  createCompany,
  allCompanies,
  addCompanyIcon,
} = require("../controller/company");

router.post("/create", createCompany);
router.get("/all", allCompanies);
router.route("/icon/:id").patch(addCompanyIcon);

module.exports = router;
