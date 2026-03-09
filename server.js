const express = require("express");
const mongoose = require("mongoose");
const policyRoutes = require("./routes/policyRoutes");
const logger = require("./middleware/logger");

const app = express();

app.use(express.json());

app.use(logger);

app.use("/api", policyRoutes);


// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/insuranceDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Server Start
const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});