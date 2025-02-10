const mongoose = require("mongoose");

const IconType = new mongoose.Schema(
  {
    warning: {
      value: { type: Number, enum: [1], required: false },
      note: { type: String, default: null },
    },
    promotion: {
      value: { type: Number, enum: [2], required: false },
      note: { type: String, default: null },
    },
    newListing: {
      value: { type: Number, enum: [3], required: false },
      date: { type: Date, default: Date.now },
    },
    bestRates: { value: { type: Number, enum: [4], required: false } },
    topRates: { value: { type: Number, enum: [5], required: false } },
    trending: { value: { type: Number, enum: [6], required: false } },
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
    iconType: {
      type: IconType,
    },
  },
  { timestamps: true }
);

const Company = mongoose.model("Company", CompanySchema);
module.exports = Company;
