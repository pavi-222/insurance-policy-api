const express = require("express");
const router = express.Router();

const {
  createPolicy,
  getPolicies,
  getPolicyById,
  updatePolicy,
  deletePolicy
} = require("../controllers/policyController");

router.post("/policies", createPolicy);

router.get("/policies", getPolicies);

router.get("/policies/:id", getPolicyById);

router.put("/policies/:id", updatePolicy);

router.delete("/policies/:id", deletePolicy);

module.exports = router;