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
    // const companyWithStatus = companies.map((company) => ({
    //   ...company.toObject(),
    //   status: getCompanyStatus(company),
    // }));
    // res.json(companyWithStatus);
    res.json(companies);
  } catch (error) {
    res.status(500).json({
      error: "Server Error",
      details: error.message,
    });
  }
};

const addCompanyIcon = async (req, res) => {
  const { id } = req.params;
  const { iconType, note } = req.body;

  if (!id) {
    throw new Error("Please provide Company ID");
  }

  if (!iconType || ![1, 2, 3, 4, 5, 6].includes(iconType)) {
    return res.status(400).json({ message: "Invalid Icon" });
  }

  const iconTypeMap = {
    1: "warning",
    2: "promotion",
    3: "newListing",
    4: "bestRates",
    5: "topRates",
    6: "trending",
  };
  const iconKey = iconTypeMap[iconType];

  const company = await Company.findById(id);

  if (!company) {
    throw new Error("Company doesn't exist");
  }

  if (!company.IconType) {
    company.IconType = {
      warning: { value: 1, note: null },
      promotion: { value: 2, note: null },
      newListing: { value: 3, note: null },
      bestRates: { value: 4 },
      topRates: { value: 5 },
      trending: { value: 6 },
    };
  }

  company.IconType[iconKey] = { value: iconType, note };
  await company.save();

  res
    .status(201)
    .json({ msg: "Company Icon updated successfully", data: company });
};

module.exports = { createCompany, allCompanies, addCompanyIcon };
