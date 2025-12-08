const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// Use PORT from environment or fallback to 3210
const port = process.env.PORT || 3210;

// Enable CORS (optional if frontend is also served from here)
app.use(cors());

// Serve static frontend from ../client
app.use(express.static(path.join(__dirname, "..", "client")));

// API endpoints
app.get("/api/select-milk", (req, res) => {
  res.send("Milk selected");
  console.log("Milk selection received.");
});

app.get("/api/select-bread", (req, res) => {
  res.send("Bread selected");
  console.log("Bread selection received.");
});

app.get("/api/select-eggs", (req, res) => {
  res.send("Eggs selected");
  console.log("Eggs selection received.");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
