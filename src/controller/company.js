const Company = require("../models/company");

const createCompany = async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.status(201).json(company);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
};

const allCompanies = async (req, res) => {
  try {
    const company = await Company.find();
    res.json(company);
  } catch (error) {
    res.status(500).json({
      error: "Server Error",
      details: error.message,
    });
  }
};

module.exports = { createCompany, allCompanies };
