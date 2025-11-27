const express = require("express");
const cors = require("cors");
const app = express();
const port = 3210;

app.use(cors());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log("Received a request at http://localhost:3210/");
});

app.get("/api/cors-test", (req, res) => {
  console.log('"CORS test" endpoint is working.');
  res.json({
    message: "Cors is working!",
    value: "Server and Client can communicate successfully.",
  });
});

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
