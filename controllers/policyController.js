const Policy = require("../models/Policy");


// Create Policy
exports.createPolicy = async (req, res) => {
  try {

    const { startDate, endDate } = req.body;

    if (new Date(endDate) <= new Date(startDate)) {
      return res.status(400).json({ message: "End date must be after start date" });
    }

    const policy = new Policy(req.body);
    await policy.save();

    res.status(201).json(policy);

  } catch (error) {

    if (error.code === 11000) {
      return res.status(400).json({ message: "Policy number already exists" });
    }

    res.status(500).json({ error: error.message });
  }
};


// Get All Policies (with filtering + pagination)
exports.getPolicies = async (req, res) => {
  try {

    const { policyType, isActive, page = 1, limit = 5 } = req.query;

    const filter = {};

    if (policyType) filter.policyType = policyType;
    if (isActive !== undefined) filter.isActive = isActive;

    const policies = await Policy.find(filter)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    res.status(200).json(policies);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Get Policy By ID
exports.getPolicyById = async (req, res) => {
  try {

    const policy = await Policy.findById(req.params.id);

    if (!policy) {
      return res.status(404).json({ message: "Policy not found" });
    }

    res.status(200).json(policy);

  } catch (error) {
    res.status(400).json({ message: "Invalid Policy ID" });
  }
};


// Update Policy
exports.updatePolicy = async (req, res) => {
  try {

    const policy = await Policy.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!policy) {
      return res.status(404).json({ message: "Policy not found" });
    }

    res.status(200).json(policy);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Delete Policy
exports.deletePolicy = async (req, res) => {
  try {

    const policy = await Policy.findByIdAndDelete(req.params.id);

    if (!policy) {
      return res.status(404).json({ message: "Policy not found" });
    }

    res.status(200).json({ message: "Policy deleted successfully" });

  } catch (error) {
    res.status(400).json({ message: "Invalid Policy ID" });
  }
};