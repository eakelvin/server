const mongoose = require("mongoose");

const IconType = new mongoose.Schema(
  {
    warning: {
      value: { type: Number, enum: [1], default: 1 },
      note: { type: String, default: null },
    },
    promotion: {
      value: { type: Number, enum: [2], default: 2 },
      note: { type: String, default: null },
    },
    newListing: {
      value: { type: Number, enum: [3], default: 3 },
      note: { type: String, default: null },
    },
    bestRates: { value: { type: Number, enum: [4], default: 4 } },
    topRates: { value: { type: Number, enum: [5], default: 5 } },
    trending: { value: { type: Number, enum: [6], default: 6 } },
  },
  { _id: false }
);

const CompanySchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true },
    category: {
      type: String,
      required: true,
      enum: ["Exchange Rates", "Fuel"],
    },
    logo: { type: String },
    IconType: {
      type: IconType,
    },
  },
  { timestamps: true }
);

const Company = mongoose.model("Company", CompanySchema);
module.exports = Company;
