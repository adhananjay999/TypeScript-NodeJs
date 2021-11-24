const express = require("express");
const router = express.Router();

// GET request
router.get("/", (req, res) => {
  res.status(200).send("Server is up and running.");
});
router.get("/specific", (req, res) => {
  res.status(200).send("Specific Post");
});

// POST request
router.post("/", (req, res) => {
  res.status(200).send("This is a POST request");
});

// PUT Request
router.put("/", (req, res) => {
  res.status(200).send("This is a PUT request");
});
// PATCH Request
router.patch("/", (req, res) => {
  res.status(200).send("This is a PATCH request");
});
// DELETE Request
router.delete("/", (req, res) => {
  res.status(200).send("This is a DELETE request");
});
module.exports = router;
