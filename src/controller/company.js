const Company = require("../models/company");
const { getCompanyStatus } = require("../utils/company");

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
    const companies = await Company.find();
    const companyWithStatus = companies.map((company) => ({
      ...company.toObject(),
      status: getCompanyStatus(company),
    }));
    res.json(companyWithStatus);
  } catch (error) {
    res.status(500).json({
      error: "Server Error",
      details: error.message,
    });
  }
};

module.exports = { createCompany, allCompanies };
