const mongoose = require("mongoose");

const policySchema = new mongoose.Schema({
  policyNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  policyHolderName: {
    type: String,
    required: true,
    trim: true
  },
  policyType: {
    type: String,
    required: true,
    enum: ["Health", "Life", "Vehicle"]
  },
  premiumAmount: {
    type: Number,
    required: true,
    min: 0
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Policy", policySchema);