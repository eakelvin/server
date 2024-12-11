const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true },
    category: {
      type: String,
      required: true,
      enum: ["Exchange Rates", "Fuel"],
    },
    logo: { type: String },
  },
  { timestamps: true }
);

const Company = mongoose.model("Company", CompanySchema);
module.exports = Company;
